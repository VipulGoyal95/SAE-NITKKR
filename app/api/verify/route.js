import crypto from "crypto";
import { collection, addDoc,setDoc, doc } from "firebase/firestore";
import nodemailer from "nodemailer";
import db from './../../firebase';

export async function POST(req) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, form, amount } = body;

    // 1. Verify signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (expectedSign !== razorpay_signature) {
      return Response.json({ success: false }, { status: 400 });
    }
    // 2. Save to Firestore
    await setDoc(doc(db, "AutokritiRegistration", razorpay_order_id), {
      ...form,
      status: "PAID",
      amount: amount,
      paidAt: new Date(),
    });

    await fetch(process.env.GSHEET_WEBAPP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        amount: amount,
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        paidAt: new Date().toISOString(),
      }),
    });

    
    // 3. Send confirmation email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"SAE NIT Kurukshetra" <${process.env.SMTP_USER}>`,
      to: form.email,
      subject: "Registration Successful for Autokriti 15.0!",
      text: `Hi ${form.name},
      Thank you for registering for Autokriti 15.0, the 15th edition of North India’s largest automotive workshop.

      We look forward to your presence at NIT Kurukshetra on 4th September, 2025.

      The detailed schedule will be shared with you shortly. 

      Stay tuned for more information!

      Best Wishes,
      SAE NIT Kurukshetra`,
      html: `
                  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;
                              border:1px solid #e5e5e5;font-family:Arial,Helvetica,sans-serif;">

                    
                    <img src="https://res.cloudinary.com/dvzvjohzj/image/upload/v1755804308/poster_hu9ivl.jpg" 
                         alt="Autokriti 15.0" 
                         style="width:100%;display:block;max-height:250px;object-fit:cover;" />

                   
                    <div style="padding:20px;text-align:center;color:#333;">
                      <h2 style="margin-top:0;color:#2c3e50;font-size:22px;">Hi ${form.name},</h2>

                      <p style="font-size:16px;line-height:1.6;margin:15px 0;color:#555;">
                        Thank you for registering for <strong>Autokriti 15.0</strong>, 
                        the 15th edition of North India’s largest automotive workshop.
                      </p>

                      <p style="font-size:16px;line-height:1.6;margin:15px 0;color:#555;">
                        We look forward to your presence at <strong>NIT Kurukshetra</strong> on 
                        <strong>4th September, 2025</strong>.
                      </p>

                      <p style="font-size:16px;line-height:1.6;margin:15px 0;color:#555;">
                        The detailed schedule will be shared with you shortly. <br/>
                        Stay tuned for more information!
                      </p>

                      
                      <hr style="margin:25px 0;border:none;border-top:1px solid #eee;" />

                      <p style="font-size:16px;color:#2c3e50;margin:0;">
                        Best Wishes,<br/>
                        <strong>SAE NIT Kurukshetra</strong>
                      </p>
                    </div>
                  </div>
                  `
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false }, { status: 500 });
  }
}

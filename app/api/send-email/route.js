import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, name, registrationID } = body;

    if (!email || !name || !registrationID) {
      return new Response(
        JSON.stringify({ success: false, message: "Recipient email, name, and registration ID are required" }),
        { status: 400 }
      );
    }

    // Setup transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"SAE NIT Kurukshetra" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Reset Your Credentials - Autokriti Portal",
      text: `Greetings, ${name}

Your Registration ID is: ${registrationID}

Kindly reset your credentials for your account on the Autokriti Portal.

To set a new password:
1. Go to the login page: https://www.saenitkurukshetra.com/autokriti/login
2. Click on "Reset Password".
3. Enter your registered email.
4. Follow the instructions to set a new password.

Note: Sometimes the reset password email may arrive in your Spam or Promotions folder. Please check there if you don’t see it in your inbox.

This is mandatory and you will receive the latest notifications and announcements regarding the workshop through this portal.

Best wishes,
SAE NIT Kurukshetra`,
      html: `
      <div style="width:100%; background-color:#f5f7fa; padding:20px 0; font-family:Arial, sans-serif;">
        <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
          
          <div style="width:100%;">
            <img src="https://res.cloudinary.com/dvzvjohzj/image/upload/v1755804308/poster_hu9ivl.jpg" alt="Autokriti Banner" style="width:100%; display:block;"/>
          </div>
          
          <div style="padding:20px; text-align:left;">
            <h2 style="color:#333333; font-size:20px; margin-bottom:15px;">Greetings, ${name}</h2>
            
            <p style="font-size:15px; color:#555555; line-height:1.6; margin-bottom:15px;">
              Kindly reset your credentials for your account on the <strong>Autokriti Portal</strong>!
            </p>

            <p style="font-size:16px; color:#222; font-weight:bold; margin-bottom:20px;">
              Your Registration ID: <span style="color:#0073e6;">${registrationID}</span>
            </p>

            <p style="font-size:15px; color:#555555; line-height:1.6; margin-bottom:20px;">
              To set a password:
              <ol style="margin:10px 0 20px 20px; color:#555555; font-size:15px; line-height:1.6;">
                <li>Go to the login page using the button below.</li>
                <li>Click on <strong>“Reset Password”</strong>.</li>
                <li>Enter your registered email address.</li>
                <li>Follow the instructions to set a password.</li>
              </ol>
            </p>

            <div style="text-align:center; margin-bottom:25px;">
              <a href="https://www.saenitkurukshetra.com/autokriti/login"
                 style="background:#0073e6; color:#ffffff; text-decoration:none; font-size:16px; font-weight:bold; padding:12px 20px; border-radius:6px; display:inline-block;">
                 Go to Login Page
              </a>
            </div>

            <p style="font-size:14px; color:#cc0000; font-style:italic; margin-bottom:20px;">
              Note: Sometimes the reset password email may arrive in your <strong>Spam</strong> or <strong>Promotions</strong> folder. Please check there if you don’t see it in your inbox.
            </p>

            <p style="font-size:15px; color:#555555; line-height:1.6; margin-bottom:20px;">
              This is mandatory and you will receive the latest notifications and announcements regarding the workshop through this portal.
            </p>

            <p style="font-size:15px; color:#333333; line-height:1.6; margin-top:25px;">
              Best wishes, <br/>
              <strong>SAE NIT Kurukshetra</strong>
            </p>
          </div>
        </div>
      </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ success: false, message: "Failed to send email", error: error.message }), {
      status: 500,
    });
  }
}

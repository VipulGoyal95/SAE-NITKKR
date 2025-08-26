import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    // Validate required fields
    if (!email) {
      return Response.json(
        {
          success: false,
          error: "Email is required",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          error: "Please enter a valid email address",
        },
        { status: 400 }
      );
    }

    try {
      // Send password reset email using Firebase
      await sendPasswordResetEmail(auth, email);

      console.log(`Password reset email sent successfully to: ${email}`);

      return Response.json({
        success: true,
        message:
          "Password reset email sent successfully. Please check your email inbox or spam folder.",
        email: email,
      });
    } catch (error) {
      console.error(`Password reset failed for ${email}:`, error);

      // Handle specific Firebase auth errors
      switch (error.code) {
        case "auth/user-not-found":
          return Response.json(
            {
              success: false,
              error:
                "No account found with this email address. Please check your email or register first.",
            },
            { status: 404 }
          );

        case "auth/invalid-email":
          return Response.json(
            {
              success: false,
              error: "Invalid email address format.",
            },
            { status: 400 }
          );

        case "auth/too-many-requests":
          return Response.json(
            {
              success: false,
              error:
                "Too many password reset attempts. Please try again later.",
            },
            { status: 429 }
          );

        case "auth/network-request-failed":
          return Response.json(
            {
              success: false,
              error:
                "Network error. Please check your internet connection and try again.",
            },
            { status: 503 }
          );

        default:
          return Response.json(
            {
              success: false,
              error:
                "Failed to send password reset email. Please try again later.",
            },
            { status: 500 }
          );
      }
    }
  } catch (err) {
    console.error("Error in forget-password route:", err);
    return Response.json(
      {
        success: false,
        error: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}

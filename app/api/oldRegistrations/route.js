import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import db, { auth } from "../../firebase";

export async function POST(req) {
  try {
    // Get all AutokritiRegistration documents
    const registrationsRef = collection(db, "AutokritiRegistration");

    // Query for documents with status "PAID" and no UID field
    const q = query(registrationsRef, where("status", "==", "PAID"));

    const querySnapshot = await getDocs(q);
    const results = [];
    const defaultPassword = "12345679";

    console.log(`Found ${querySnapshot.size} documents with status PAID`);

    for (const document of querySnapshot.docs) {
      const data = document.data();
      const docId = document.id;

      // Check if UID field is missing
      if (!data.uid && data.email) {
        try {
          console.log(`Processing document ${docId} for email: ${data.email}`);

          // Try to create user account
          let uid = null;
          try {
            const userCredential = await createUserWithEmailAndPassword(
              auth,
              data.email,
              defaultPassword
            );
            uid = userCredential.user.uid;
            console.log(
              `User created successfully for ${data.email} with UID: ${uid}`
            );
          } catch (error) {
            // If user already exists, try to sign in
            if (error.code === "auth/email-already-in-use") {
              console.log(
                `User already exists for ${data.email}, attempting to sign in`
              );

              console.error(`Error creating user for ${data.email}:`, error);
              results.push({
                docId,
                email: data.email,
                success: false,
                error: "Failed to create user account",
                details: error.message,
              });
              continue;
            }
          }

          // Update the document with UID
          try {
            await updateDoc(doc(db, "AutokritiRegistration", docId), {
              uid: uid,
              updatedAt: new Date(),
            });

            console.log(
              `Document ${docId} updated successfully with UID: ${uid}`
            );
            results.push({
              docId,
              email: data.email,
              success: true,
              uid: uid,
              message: "User account created and document updated successfully",
            });
          } catch (updateError) {
            console.error(`Failed to update document ${docId}:`, updateError);
            results.push({
              docId,
              email: data.email,
              success: false,
              error: "Failed to update document",
              details: updateError.message,
            });
          }
        } catch (docError) {
          console.error(`Error processing document ${docId}:`, docError);
          results.push({
            docId,
            email: data.email || "No email",
            success: false,
            error: "Document processing failed",
            details: docError.message,
          });
        }
      } else if (data.uid) {
        console.log(`Document ${docId} already has UID: ${data.uid}`);
        results.push({
          docId,
          email: data.email,
          success: true,
          uid: data.uid,
          message: "Document already has UID",
        });
      } else if (!data.email) {
        console.log(`Document ${docId} has no email address`);
        results.push({
          docId,
          email: "No email",
          success: false,
          error: "No email address found",
        });
      }
    }

    // Count successful and failed operations
    const successful = results.filter((r) => r.success).length;
    const failed = results.filter((r) => !r.success).length;

    console.log(
      `Processing completed. Successful: ${successful}, Failed: ${failed}`
    );

    return Response.json({
      success: true,
      summary: {
        totalDocuments: querySnapshot.size,
        successful: successful,
        failed: failed,
      },
      results: results,
      message: `Processed ${querySnapshot.size} documents. ${successful} successful, ${failed} failed.`,
    });
  } catch (err) {
    console.error("Error in oldRegistrations route:", err);
    return Response.json(
      {
        success: false,
        error: err.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}

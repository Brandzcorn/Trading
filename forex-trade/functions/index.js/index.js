const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.processKYC = functions.https.onCall(async (data, context) => {
  const { userId, kycData } = data;
  await admin.firestore().collection("kyc").doc(userId).set(kycData);
  return { success: true, message: "KYC Submitted" };
});
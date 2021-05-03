var admin = require("firebase-admin");

var serviceAccount = require("./firebase-service-account.json");

if (admin.app.length === 0)
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

module.exports = admin;

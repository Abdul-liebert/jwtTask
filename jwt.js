const jwt = require('jsonwebtoken');
const privateKey = 'privateDocs';
const payload = { userId: 1006, username: "Noxx", Grade: "S" }
const generateToken = jwt.sign(payload, privateKey);
console.log("Generated Token : ", generateToken)
    // Coba dong verifikasi
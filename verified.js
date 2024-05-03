const jwt = require('jsonwebtoken');
const privateKey = 'privateDocs';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDYsInVzZXJuYW1lIjoiTm94eCIsIkdyYWRlIjoiUyIsImlhdCI6MTcxNDYzMzA2Nn0.dH52heAjDLWMR9oTDU7zNAYtm3piEwkouAs_tG7OTUM'
jwt.verify(token, privateKey, (err, decoded) => {
    if (err) console.log(err);
    else console.log('Token is valid');
    delete decoded.iat;
    console.log(decoded);
})
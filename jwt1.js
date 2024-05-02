const jwt = require('jsonwebtoken');
const key = 'liburan';

function dataToken(nama, alamat, nomor) {
    const data = { nama, alamat, nomor };

    return jwt.sign(data, key)
}

function verify(token) {
    try {
        const decoded = jwt.verify(token, key);
        delete decoded.iat;
        return decoded;
    } catch (err) {
        return (null)
    }
}

const subject = {
    nama: 'Dalban Robert',
    alamat: 'Banyumas',
    nomor: '+12 3456789'
}

const token = dataToken(
    subject.nama,
    subject.alamat,
    subject.nomor,
)


//token data
console.log('Token:', token)

//data subject
const decodedData = verify(token)
console.log(decodedData) // Output : {`
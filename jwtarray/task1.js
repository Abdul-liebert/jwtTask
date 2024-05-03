const jwt = require('jsonwebtoken');
const key = 'liburan';

function dataToken(nama, alamat, nomor) {
    const data = { nama, alamat, nomor };

    return jwt.sign(data, key)
}

function verify(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        delete decoded.iat;
        return decoded;
    } catch (err) {
        // console.error();
        return (null)
    }

}


const subject = [{
        nama: 'Dalban Robert',
        alamat: 'Banyumas',
        nomor: '+12 3456789'
    },
    {
        nama: 'Robert',
        alamat: 'Temanggung',
        nomor: '+12 9045835'
    },
    {
        nama: 'Dalban',
        alamat: 'Kudus',
        nomor: '+12 5454533'
    },
    {
        nama: 'Justice',
        alamat: 'Magelang',
        nomor: '+12 8904587'
    },
    {
        nama: 'Jeopardy',
        alamat: 'Bantul',
        nomor: '+12 0121129'
    }
]

const arrTokens = [];

subject.forEach(sub => {
    const token = dataToken(
        sub.nama,
        sub.alamat,
        sub.nomor
    );
    arrTokens.push(token);

});

arrTokens.forEach((sub, index) => {
    console.log(`Nomor ${index + 1} : ${sub}`);
})
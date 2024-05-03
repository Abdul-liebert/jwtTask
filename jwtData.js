const jwt = require('jsonwebtoken')
const secretKey = 'secret'

//Membuat Token
function createToken(id, namaSiswa, kelas, alamat, hobi) {
    const data = { id, namaSiswa, kelas, alamat, hobi };

    return jwt.sign(data, secretKey);
}

//Verifikasi token
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

const siswa = {
    id: 1,
    namaSiswa: 'Abdul',
    kelas: 'XI',
    alamat: 'Purwokerto',
    hobi: ['Bermain Gitar', 'Coding']

}

//membuat token siswa
const token = createToken(
    siswa.id,
    siswa.namaSiswa,
    siswa.kelas,
    siswa.alamat,
    siswa.hobi,
)

//verifikasi token siswa


const decodedSiswa = verify(token);
console.log('decodedsiswa:', decodedSiswa)

// console.log('Token', token)
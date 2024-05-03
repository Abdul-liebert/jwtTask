const jwt = require('jsonwebtoken');
const sKey = 'secret';

function createToken(id, names, grade, address, hobby) {
    const data = { id, names, grade, address, hobby };

    return jwt.sign(data, sKey);
}

const dataSiswa = [{
        id: 1,
        names: 'Abdoel',
        class: 'XI SIJA',
        address: 'Ciampea',
        hobby: ['coding', 'Game']
    },
    {
        id: 2,
        names: 'Aziz',
        class: 'XI SIJA',
        address: 'Purwokerto',
        hobby: ['Cinema', 'Game']
    }
]

const arrTokens = [];
dataSiswa.forEach(siswa => {
    const token = createToken(
        siswa.id,
        siswa.names,
        siswa.grade,
        siswa.address,
        siswa.hobby);
    arrTokens.push(token);
})

arrTokens.forEach((siswa, index) => {
    console.log(`Token siswa ${index + 1}: ${siswa} \n`, );
})
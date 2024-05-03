const jwt = require('jsonwebtoken');
const key = 'liburan';

function dataToken(id, jadwalshalat, waktuMakan, dailyRoutine) {
    const data = { id, jadwalshalat, waktuMakan, dailyRoutine };

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


const schedule = [{
        id: 1,
        jadwalshalat: {
            subuh: '04:45',
            dhuha: '08:00',
            dzuhur: '12:37',
            ashar: '15:25',
            maghrib: '17:55',
            murajaah: '19:06',
            isya: '19:55',
            tarawih: '20:15'
        }
    },
    {
        id: 2,
        waktuMakan: {
            sahur: '04:00',
            iftar: '18:10'
        }
    },
    {
        id: 3,
        dailyRoutine: {
            workout: '07:00',
            project: '09:45',
            ngabuburit: '17:00'
        }
    }
]

const arrTokens = [];

schedule.forEach(sch => {
    const token = dataToken(
        sch.jadwalshalat,
        sch.waktuMakan,
        sch.dailyRoutine
    );
    arrTokens.push(token);

});

arrTokens.forEach((sch, index) => {
    console.log(`Nomor ${index + 1} : ${sch}`);
    const decode = verify(sch);
    console.log(`decode ${index + 1}: ${decode}`);
})
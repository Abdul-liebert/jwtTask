const jwt = require('jsonwebtoken');
const key = 'liburan';

function dataToken(sahur, subuh, dhuha, dzuhur, ashar, maghrib, murajaah, isya, tarawih) {
    const data = { sahur, subuh, dhuha, dzuhur, ashar, maghrib, murajaah, isya, tarawih };

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

const schedule = {
    sahur: '04:00',
    subuh: '04:45',
    dhuha: '08:00',
    dzuhur: '12:37',
    ashar: '15:25',
    maghrib: '17:55',
    murajaah: '19:06',
    isya: '19:55',
    tarawih: '20:15'
}

const token = dataToken(
    schedule.sahur,
    schedule.subuh,
    schedule.dhuha,
    schedule.dzuhur,
    schedule.ashar,
    schedule.maghrib,
    schedule.murajaah,
    schedule.isya,
    schedule.tarawih,
)

//token jadwal
console.log('Token:', token)

//data jadwal
const decodedSchedule = verify(token)
console.log(decodedSchedule) // Output : {
function getParams() {
    const params = new URLSearchParams(window.location.search);

    return {
        fName : params.get('fName'),
        lName : params.get('lName'),
        room : params.get('room'),
        date : params.get('reserveDate'),
        phone : params.get('phone')
    }
}

const info = getParams();

const section = document.getElementById('thanks');

let names = document.createElement('p');
names.innerHTML = `<strong>Name:</strong> ${info.fName} ${info.lName}`;

let reserve = document.createElement('p');
reserve.innerHTML = `<strong>Reservation Date:</strong> ${info.date}`;

let room = document.createElement('p');
room.innerHTML = `<strong>Room:</strong> ${info.room}`

let phone = document.createElement('p');
phone.innerHTML = `<strong>Phone Number:</strong> ${info.phone}`;

section.append(names,reserve,phone,room);


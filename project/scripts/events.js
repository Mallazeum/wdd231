const events = document.getElementById('events');
const upcoming = document.getElementById('upcoming');

export async function getEventData () {
    try{
        const response = await fetch('./data/events.json');
        if(response.ok){
            const data = await response.json();
            return data.events;
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error.message);
    }
}

export function display (data) {
    data.forEach(event => {
        let { name, month, date, time, price } = event;

        let head = document.createElement('p');
        head.innerHTML = `<strong>${name}</strong>`;

        let sub = document.createElement('p')
        sub.textContent = `${month} ${date}, ${time} ($${price})`

        events.append(head,sub);
    });
}

export function displayModal (data) {
    upcoming.innerHTML = '';

    let close = document.createElement('button');
    close.classList.add("closeModal");
    close.textContent = '❌';
    close.onclick = () => upcoming.close();

    let now = new Date();
    let day = now.getDate();
    data.sort((a, b) => a.date - b.date);
    let item = data.find(element => day <= element.date)

    let { name, month, date, time, price } = item;

    let head = document.createElement('p');
    head.innerHTML = `<strong>${name}</strong>`;

    let sub = document.createElement('p')
    sub.textContent = `${month} ${date}, ${time} ($${price})`

    upcoming.append(close, head, sub);

    upcoming.showModal();
}
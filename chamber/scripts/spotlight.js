const cards = document.getElementById('businesses');

async function getMemberData () {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayMembers(data.companies);
}

function displayMembers(data) {
    cards.innerHTML = '';

    let eligableMembers = data.filter(member => member.membershipLevel >= 2);
    
    let selectedMembers = eligableMembers.sort(() => Math.random() - 0.5).slice(0,3);

    selectedMembers.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let info = document.createElement('p');
        let image = document.createElement('img');

        card.classList.add('card');

        name.textContent = member.name;

        info.innerHTML = `Address: ${member.address} <br>
                            Phone Number: ${member.phoneNumber} <br>
                            Website: ${member.websiteURL} <br>
                            Membership Level: ${member.membershipLevel}`;

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Picture of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', 'auto');

        card.appendChild(name);
        card.appendChild(info);
        card.appendChild(image);

        cards.appendChild(card);
    })
}

getMemberData();

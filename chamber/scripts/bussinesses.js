const cards = document.getElementById('cards');

async function getMemberData (category) {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayMembers(data.companies,category);
}

function displayMembers(data,category) {
    cards.innerHTML = '';
    if (category == 'list'){
        cards.classList.add('list')
        cards.classList.remove('grid')

        data.forEach((member) => {
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let info = document.createElement('p');

            name.textContent = member.name;
            info.innerHTML = `Address: ${member.address} <br>Phone Number: ${member.phoneNumber} <br>Website: ${member.websiteURL} <br>Membership Level: ${member.membershipLevel}`;

            card.appendChild(name);
            card.appendChild(info);

            cards.appendChild(card);
        })
    }
    else{
        cards.classList.add('grid')
        cards.classList.remove('list')

        data.forEach((member) => {
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let info = document.createElement('p');
            let image = document.createElement('img');

            name.textContent = member.name;
            info.innerHTML = `Address: ${member.address} <br>Phone Number: ${member.phoneNumber} <br>Website: ${member.websiteURL} <br>Membership Level: ${member.membershipLevel}`;

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
}

getMemberData();

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
	button.addEventListener("click", function(event) {
		getMemberData(this.id)
	});
});
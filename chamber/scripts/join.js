const buttons = document.querySelectorAll(".open");

async function getLevelData (level) {
    const response = await fetch('./data/levels.json');
    const data = await response.json();
    display(data.levels, level);
}

function display(data, level) {
    const levelDetails = document.querySelector(`.${level}`);
    levelDetails.innerHTML = "";
    let name = document.createElement('h2');
    let price = document.createElement('p');
    let benefits = document.createElement('ul');
    let close = document.createElement('button');

    close.classList.add("closeModal");
    close.textContent = '❌';
    close.onclick = () => levelDetails.close();

    data.forEach((item) => {
        if(item.id == level){
            name.textContent = item.name;
            price.textContent = item.price;
            item.benefits.forEach(perk => {
                let listItem = document.createElement('li');
                listItem.textContent = perk;
                benefits.appendChild(listItem);
            });
        }
    })

    levelDetails.appendChild(close);
    levelDetails.appendChild(name);
    levelDetails.appendChild(price);
    levelDetails.appendChild(benefits);

    levelDetails.showModal();

    levelDetails.addEventListener("click", (event) => {
        if(event.target === levelDetails) {
            levelDetails.close();
        }
    })
}

buttons.forEach(button => {
	button.addEventListener("click", function(event) {
		getLevelData(this.id)
	});
});

function setTimestamp () {
    const timeField = document.getElementById('timeStamp');
    timeField.value = Math.floor(Date.now() / 1000);
}
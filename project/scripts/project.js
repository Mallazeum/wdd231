const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.textContent = today.getFullYear()

let lastModif = new Date(document.lastModified); 

lastModified.textContent = `Last Modified: ${lastModif}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const upcoming = document.getElementById('upcoming');
const events = document.getElementById('events');

import { getEventData, display, displayModal } from "./events.js";

async function init() {
    const data = await getEventData();

    if(!data) return;

    if(events != null) {
        display(data);
    }

    const show = document.getElementById('open');

    if(show != null){
        show.addEventListener('click', () => {
            displayModal(data);
        });
    }
}

document.addEventListener("DOMContentLoaded", init);
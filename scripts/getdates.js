const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear()

let lastModif = new Date(document.lastModified); 

lastModified.innerHTML = `Last Modified: ${lastModif}`;
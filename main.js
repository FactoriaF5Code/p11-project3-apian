"use strict"

const responseStatusText = document.querySelector("#responseStatusText");
const responseBodyText = document.querySelector("#responseBodyText");
const urlInput = document.querySelector("#urlInput");
const runButton = document.querySelector("#runButton");

let updateResult = async () => {
    let url = urlInput.value;
    let respuesta = await fetch(url);
    responseStatusText.innerHTML = `Response Status: ${respuesta.status}`;
    let data = await respuesta.json();
    responseBodyText.innerHTML = JSON.stringify(data, null, 2);
}

runButton.addEventListener("click", updateResult);


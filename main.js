"use strict"

let url = "https://rickandmortyapi.com/api/character"
fetch(url)
    .then(r => r.json())
    .then(datos => {
        document.querySelector("#responseBodyText").innerHTML =
            JSON.stringify(datos, null, 2);
    });
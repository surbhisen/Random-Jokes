const URL = "https://official-joke-api.appspot.com/random_joke" ;
const factspara = document.querySelector("#jokes");
const factsbtn = document.querySelector("#btn");
const getFacts = async () => {
    let response = await fetch(URL);
    console.log("reponse...", response);
    let data = await response.json();
    console.log( data.setup);
    console.log(data.punchline);
    factspara.innerHTML = `<p class="p1">${data.setup}</p> <p class="p2">${data.punchline}</p>`;

};

btn.addEventListener("click", getFacts);


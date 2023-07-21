const display = document.getElementById('display');
const submit_btn = document.querySelector("#submit-btn");
const altName = document.querySelector("#alt");
const capital = document.querySelector("#capital");
const timezone = document.querySelector("#timezone");
const currency = document.querySelector("#currency");
const borders = document.querySelector("#borders");
const flag = document.querySelector("#flag");
const flag_detail = document.querySelector("#flag-detail");
const coat = document.querySelector("#coat");
const coat_detail = document.querySelector("#coat-detail");

submit_btn.addEventListener("click", () => {
    const name = document.querySelector("#scan-input").value;
    get_API(name);
})

function get_API(name) {
    if(name === "" || name === null) {
        alert("Enter a valid name");
    } else {
        fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            altName.innerHTML = `
            Continent: ${data[0]["continents"][0]}, ${data[0]["altSpellings"][0]}
            `
            capital.innerHTML = `Country's capital: ${data[0]["capital"][0]}`
            timezone.innerHTML = `Country's timezone: ${data[0]["timezones"][0]}`
            borders.innerHTML = `
            <p>Surrounding Countries: ${data[0]["borders"]}<p>
            `
            flag.innerHTML = `
            <img src="${data[0]["flags"]["png"]}">
            `
            flag_detail.innerHTML = `${name}'s flag`
            coat.innerHTML = `
            <img src="${data[0]["coatOfArms"]["png"]}">
            `
            coat_detail.innerHTML = `${name}'s coat of arms`
        })
        .catch(error => console.error(error))
    }
    
}


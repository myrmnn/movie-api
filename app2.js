const form = document.querySelector('form');


form.addEventListener('submit', function (e) {
    e.preventDefault();
const input = document.querySelector('input');


async function getCountry(){
    const country = await axios.get('https://restcountries.eu/rest/v2/name/' + input.value);

    input.value = '';

    console.log(country.data);
    const p = document.querySelector('p');
    p.innerHTML = `
    <h1>${country.data[0].name}</h1>
    <h2>${country.data[0].nativeName}</h2>
    <img src='${country.data[0].flag}'>
    <h3>Language:</h3>
    `
    for(language of country.data[0].languages){
        p.insertAdjacentHTML('beforeend', `
        <p>${language.name}</p>
        `)
    }
} 

    getCountry();
})


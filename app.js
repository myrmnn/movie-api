const fetchData = async (searchTerm) => {
const response = await axios.get('http://www.omdbapi.com/', {
    params: {
        apikey: 'b9718e3',
        s: searchTerm
    }
});

if(response.data.Error){
    return [];
}

return response.data.Search;
};

const root = doc.querySelector('.autocomplete');
root.innerHTML = `

`;

const input = document.querySelector('input');

const onInput = async e => {
 const movies = await fetchData(e.target.value);

    for(let movie of movies){
        const div = document.createElement('div');
        div.innerHTML  = `
        <img src="${movie.Poster}"/>
        <h1>${movie.Title}</h1>
        `;

        document.querySelector('#target').appendChild(div);
    }
};

input.addEventListener('input', debounce(onInput, 500))
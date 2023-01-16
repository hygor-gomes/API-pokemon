const pokemonName = document.querySelector('.pokemon_name');
const pokemonImage = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const input = document.querySelector('.input_src');
const random = document.querySelector('.random_btn');

let searchPokemon = 1;



const fetchPokemon = async (pokemon) => {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await apiResponse.json();
    return data;
}
const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = data.name;
    pokemonImage.src = data.id >= 650 ? data.sprites?.versions['generation-viii']?.icons['front_default'] : data.sprites?.versions['generation-v']['black-white']?.animated['front_default'];
    input.value = '';
    searchPokemon = data.id;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})
    

random.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * (900 - 1 + 1) + 1);
    searchPokemon = randomNumber;
    renderPokemon(searchPokemon);

})

renderPokemon(searchPokemon);

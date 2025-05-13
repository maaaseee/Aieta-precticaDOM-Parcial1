const searchBar = document.getElementById("search-bar");
const gamesResult = document.getElementById("search-results");

const juegosPC = [
  { nombre: "Elden Ring", precio: 59.99 },
  { nombre: "Cyberpunk 2077", precio: 49.99 },
  { nombre: "Red Dead Redemption 2", precio: 39.99 },
  { nombre: "The Witcher 3: Wild Hunt", precio: 19.99 },
  { nombre: "Hogwarts Legacy", precio: 59.99 },
  { nombre: "God of War", precio: 49.99 },
  { nombre: "Resident Evil 4 Remake", precio: 59.99 },
  { nombre: "Hades", precio: 24.99 },
  { nombre: "Stardew Valley", precio: 14.99 },
  { nombre: "Baldur's Gate 3", precio: 59.99 }
];

let renderList = [];

function searchGames( name ) {
    const foundGames = juegosPC.filter((game) => 
        game.nombre.toLowerCase().includes(name.toLowerCase())
    );
    
    return foundGames;
}

function createGameElement( game ) {
    const li = document.createElement('li');
    
    const nameSpan = document.createElement('span')
    nameSpan.textContent = game.nombre;

    const priceSpan = document.createElement('span')
    priceSpan.textContent = game.precio;

    li.appendChild(nameSpan);
    li.appendChild(priceSpan);

    return li;
}

function renderGames() {
    gamesResult.innerHTML = '';

    renderList.forEach((game) => {
        const li = createGameElement(game);
        gamesResult.appendChild(li);
    })
}

searchBar.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const [search] = event.target;
    
    renderList = searchGames(search.value.trim());
    renderGames();
})

renderGames()
const form = document.getElementById('lang-form');
const leaderboard = document.getElementById('lang-leaderboard');

const defaultVotes = {
  JavaScript: 0,
  Python: 0,
  Java: 0,
  'C#': 0,
  Ruby: 0
}

let votes = JSON.parse(localStorage.getItem("votes")) || { ...defaultVotes };

function createListItem(language, count) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${language}</span><span>${count} ${count === 1 ? 'voto' : 'votos'}</span>`;
    return li;
}

function saveResults() {
    localStorage.setItem('votes', JSON.stringify(votes));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = event.target;
    const selectedRadio = [...formElements].find(language => language.checked && language.type === 'radio');

    if (!selectedRadio) {
        alert('Por favor, seleccionar un lenguaje valido')
        return;
    }

    const selectedValue = selectedRadio.value;

    votes[selectedValue]++;
    saveResults();
    renderLeaderboard();
})

function renderLeaderboard() {
    leaderboard.innerHTML = '';

    const sortedEntries = Object.entries(votes)
        .sort(([, a], [, b]) => b - a);;

    for (const [language, count] of sortedEntries) {
        leaderboard.appendChild(createListItem(language, count));
    }
}

renderLeaderboard();
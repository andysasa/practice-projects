const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

// fetch returns a 'promise', something that will eventually come back
// .then() to retrieve blob of data, this blob does not know the data type
// .then() again to retrieve raw data
// use spread operate (...) so pushed array is not nested
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

// match search words to cities list with filter()
function findMatches(wordToMatch, cities) {
    return cities.filter(
        place => {
            // put variable into regex
            const regex = new RegExp(wordToMatch, 'gi');
            return place.city.match(regex) || place.state.match(regex);
        }
    );
}

// add commas to population numbers
function commaWithNum(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// display matched words in suggestions
function displayMatches() {
    const matches = findMatches(this.value, cities);

    // .map() will return an array, .join() to convert into string
    const html = matches.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);
        return `
            <li>
                <span class='name'>${cityName}, ${stateName}</span>
                <span>${commaWithNum(place.population)}</span>
            </li>
        `;
    }).join('');
    return suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// listen both change and keyup event to display matches while typing
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);


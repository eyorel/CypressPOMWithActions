class ChuckNorrisAPI {
    getRandomJoke() {
        return cy.request('https://api.chucknorris.io/jokes/random');
    }
}

export default ChuckNorrisAPI;

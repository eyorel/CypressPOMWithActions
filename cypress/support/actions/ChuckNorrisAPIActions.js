import ChuckNorrisAPI from '../pageObjects/ChuckNorrisAPI';

class ChuckNorrisAPIActions {
    constructor() {
        this.chuckNorrisAPI = new ChuckNorrisAPI();
    }

    fetchRandomJokeAndAssertStatus() {
        this.chuckNorrisAPI.getRandomJoke().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('value');
        });
    }

    fetchRandomJokeAndAssertNonEmptyValue() {
        this.chuckNorrisAPI.getRandomJoke().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.value).to.be.a('string').and.not.be.empty;
        });
    }

    fetchRandomJokeAndAssertValidIdAndUrl() {
        this.chuckNorrisAPI.getRandomJoke().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id').and.be.a('string');
            expect(response.body).to.have.property('url').and.be.a('string').and.match(/^https?:\/\/\S+$/);
        });
    }
}

export default ChuckNorrisAPIActions;

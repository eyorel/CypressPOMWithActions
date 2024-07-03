import ChuckNorrisAPIActions from '../../support/actions/ChuckNorrisAPIActions';

describe('Chuck Norris API Tests', () => {
    const chuckNorrisAPIActions = new ChuckNorrisAPIActions();

    it('should fetch a random joke with status 200', () => {
        chuckNorrisAPIActions.fetchRandomJokeAndAssertStatus();
    });

    it('should fetch a random joke with a non-empty value', () => {
        chuckNorrisAPIActions.fetchRandomJokeAndAssertNonEmptyValue();
    });

    it('should fetch a random joke with valid id and url', () => {
        chuckNorrisAPIActions.fetchRandomJokeAndAssertValidIdAndUrl();
    });
});

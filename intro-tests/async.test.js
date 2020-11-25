const getPeople = require('./async');


describe('Async testes for getting people API', () => {
    it('calls api to get people', async () => {
        expect.assertions(2);

        const data = await getPeople();
        
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    });
});
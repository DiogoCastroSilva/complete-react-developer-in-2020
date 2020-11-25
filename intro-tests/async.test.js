const getPeople = require('./async');


describe('Async tests for getting people API', () => {
    it('calls api to get people', async () => {
        expect.assertions(2);

        const data = await getPeople();

        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    });

    it('getPeople returns count and results', async () => {
        const mockFetch = jest
            .fn()
            .mockReturnValue(Promise.resolve({
                json: () => Promise.resolve({
                    count: 87,
                    results: [0, 1, 2, 3, 4, 5]
                })
            }));

        expect.assertions(4);

        const data = await getPeople(mockFetch);

        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people');
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    });
});
const googleSearch = require('./index.js');


const dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
];


describe('google search', () => {
    it('is searching google', () => {
        expect(googleSearch('testest', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
    });
    
    it('works with undefined and null inputs', () => {
        expect(googleSearch(null, dbMock)).toEqual([]);
        expect(googleSearch(undefined, dbMock)).toEqual([]);
    });
    
    it('does not return more than 3 items', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    });
});

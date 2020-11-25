const googleDatabase = [
    'cats.com',
    'soup.com',
    'animals.com',
    'flowers.com',
    'catspictures.com',
    'myfavouritecats.com'
];


const googleSearch = (searchInput, db = googleDatabase) => {
    const matches = db.filter(
        website => website.includes(searchInput)
    );

    return matches.length > 3 ? matches.slice(0, 3) : matches;
};


module.exports = googleSearch;
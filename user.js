var user = {
    name: "Joe",
    location: 'Provo',
    occupations: ['Assistant Coach-BYU Racquetball', 'Web Develper'],
    hobbies: [{
        name: 'baseball',
        type: 'sport'
    }, {
        name: 'racquetball',
        type: 'sport'
    }, {
        name: 'boardgames',
        type: 'games'
    }],
    family: [{
        name: 'John',
        relation: 'father',
        gender: 'male'
    }, {
        name: 'Claudia',
        relation: 'mother',
        gender: 'female'
    }, {
        name: 'Bethany',
        relation: 'sister',
        gender: 'female'
    }],
    restaurants: [{
        name: 'In N Out',
        type: 'burgers & fries',
        rating: 9
    }, {
        name: 'Chick Fil-A',
        type: 'chicken & fries',
        rating: 8
    }, {
        name: 'Mountain Mikes',
        type: 'pizza',
        rating: 10
    }]
}
module.exports = user;

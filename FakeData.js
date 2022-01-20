const UserList = [{
        id: 1,
        name: 'John Doe',
        username: 'john',
        age: 30,
        nationality: 'INDIA',
        friends: [{
            id: 5,
            name: 'John di bhen di',
            username: 'johni_dsnds',
            age: 20,
            nationality: 'GURGAON'
        }]
    },
    {
        id: 2,
        name: 'John jatt',
        username: 'johncena',
        age: 302,
        nationality: 'DESH'
    },
    {
        id: 3,
        name: 'John singh',
        username: 'johnaa',
        age: 3220,
        nationality: 'PUNJAB',
        friends: [{
            id: 4,
            name: 'John gabru',
            username: 'john_gabru',
            age: 130,
            nationality: 'TAPA'
        }]
    },
    {
        id: 4,
        name: 'John gabru',
        username: 'john_gabru',
        age: 130,
        nationality: 'TAPA',
        friends: [{
            id: 2,
            name: 'John jatt',
            username: 'johncena',
            age: 302,
            nationality: 'DESH'
        }]
    },
    {
        id: 5,
        name: 'John di bhen di',
        username: 'johni_dsnds',
        age: 20,
        nationality: 'GURGAON'
    }
]

const MovieList = [{
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheaters: true,
    },
    {
        id: 2,
        name: "Interstellar",
        yearOfPublication: 2007,
        isInTheaters: true,
    },
    {
        id: 3,
        name: "Superbad",
        yearOfPublication: 2009,
        isInTheaters: true,
    },
    {
        id: 4,
        name: "JattMan The Movie",
        yearOfPublication: 2025,
        isInTheaters: false,
    },
];

module.exports = { UserList, MovieList };
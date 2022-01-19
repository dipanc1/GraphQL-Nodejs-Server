const { UserList } = require('../FakeData');
const _ = require('lodash');


const resolvers = {
    Query: {
        //User Resolvers
        users() {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },

        //Movie Resolvers
        movies: () => {

        },
        movie: (parent, args) => {}
    }
}

module.exports = { resolvers };
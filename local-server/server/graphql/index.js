const graphql = require('graphql');

const customerQueryFactory = require('./queries/customer');
const cardListQueryFactory = require('./queries/cardList');
const addCardFactory = require('./mutations/addCard');

module.exports = (app) => {

  return new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
      name: 'Query',
      fields: {
        customer: customerQueryFactory(app),
        cardList: cardListQueryFactory(app)
      }
    }),
    mutation: new graphql.GraphQLObjectType({
      name: 'mutation',
      fields: {
        addCard: addCardFactory(app)
      }
    })
  });
};

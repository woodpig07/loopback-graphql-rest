const graphql = require('graphql');

module.exports = new graphql.GraphQLObjectType({
  name: 'Card',
  fields: {
    cardNumber: {
      type: graphql.GraphQLString
    },
    code: {
      type: graphql.GraphQLString
    },
    status: {
      type: graphql.GraphQLString
    },
    domain: {
      type: graphql.GraphQLString
    }
  }
});
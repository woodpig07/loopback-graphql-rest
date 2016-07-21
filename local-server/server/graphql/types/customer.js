const graphql = require('graphql');
const cardType = require('./card');

module.exports = (app) => {
  const cardModel = app.models.Card;

  return new graphql.GraphQLObjectType({
    name: 'Customer',
    fields: {
      username: {
        type: graphql.GraphQLString
      },
      firstName: {
        type: graphql.GraphQLString
      },
      lastName: {
        type: graphql.GraphQLString
      },
      cards: {
        type: new graphql.GraphQLList(cardType),
        resolve: (customer, args, context) => {
          return new Promise((resolve, reject) => {
            cardModel.getCustomerCards(context.header['x-customer-id'], (err, body, res) => {
              if (err || res.statusCode !== 200) {
                return reject(err || res.statusCode);
              }
              return resolve(body);
            });
          });
        }
      }
    }
  });
};
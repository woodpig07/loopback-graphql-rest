const graphql = require('graphql');
const cardType = require('../types/card');

var cardListQueryFactory = (app) => {
  const cardModel = app.models.Card;
  return {    
    type: new graphql.GraphQLList(cardType),
    args: {},
    resolve: (source, args, context) => {
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
};

module.exports = cardListQueryFactory;
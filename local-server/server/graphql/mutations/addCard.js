const graphql = require('graphql');
const cardType = require('../types/card');

var addCardFactory = (app) => {

  const cardModel = app.models.Card;
  return {
    type: cardType,
    args: {
      cardNumber: {
        name: 'cardNumber',
        type: graphql.GraphQLString
      },
      code: {
        name: 'code',
        type: graphql.GraphQLString
      },
      domain: {
        name: 'domain',
        type: graphql.GraphQLString
      },
      status: {
        name: 'status',
        type: graphql.GraphQLString
      }
    },
    resolve: (source, args, context) => {
      return new Promise((resolve, reject) => {

        cardModel.addCard(context.header['x-customer-id'], args.cardNumber, args.code, args.domain, args.status, (err, body, res) => {
          if (err || res.statusCode !== 200) {
            return reject(err || res.statusCode);
          }
          return resolve(body);
        });
      });
    }
  };
}

module.exports = addCardFactory;
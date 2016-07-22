import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';
import cardType from './card';

function customerTypeFactory (app) {
  const cardModel = app.models.Card;

  return new GraphQLObjectType({
    name: 'Customer',
    fields: {
      username: {
        type: GraphQLString
      },
      firstName: {
        type: GraphQLString
      },
      lastName: {
        type: GraphQLString
      },
      cards: {
        type: new GraphQLList(cardType),
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

export default customerTypeFactory;

import {GraphQLString} from 'graphql';
import cardType from '../types/card';

function addCardFactory (app) {

  const cardModel = app.models.Card;
  return {
    type: cardType,
    args: {
      cardNumber: {
        name: 'cardNumber',
        type: GraphQLString
      },
      code: {
        name: 'code',
        type: GraphQLString
      },
      domain: {
        name: 'domain',
        type: GraphQLString
      },
      status: {
        name: 'status',
        type: GraphQLString
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

export default addCardFactory;

import {GraphQLList} from 'graphql';
import cardType from '../types/card';

function cardListQueryFactory (app) {
  const cardModel = app.models.Card;
  return {    
    type: new GraphQLList(cardType),
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

export default cardListQueryFactory;
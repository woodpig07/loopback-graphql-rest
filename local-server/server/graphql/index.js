import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

import customerQueryFactory from './queries/customer';
import cardListQueryFactory from './queries/cardList';
import addCardFactory from './mutations/addCard';

function schemaFactory (app) {

  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        customer: customerQueryFactory(app),
        cardList: cardListQueryFactory(app)
      }
    }),
    mutation: new GraphQLObjectType({
      name: 'mutation',
      fields: {
        addCard: addCardFactory(app)
      }
    })
  });
};

export default schemaFactory;

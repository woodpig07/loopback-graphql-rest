import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Card',
  fields: {
    cardNumber: {
      type: GraphQLString
    },
    code: {
      type: GraphQLString
    },
    status: {
      type: GraphQLString
    },
    domain: {
      type: GraphQLString
    }
  }
});
const graphql = require('graphql');
const customerTypeFactory = require('../types/customer');

var customerQueryFactory = (app) => {
  var customerModel = app.models.Customer;
  return {
    type: customerTypeFactory(app),
    args: {},
    resolve: (source, args, context) => {
      return new Promise((resolve, reject) => {
        customerModel.getCustomer(context.header['x-customer-id'], (err, body, res) => {
          if (err || res.statusCode !== 200) {
            return reject(err || res.statusCode);
          }
          return resolve(body[0]);
        });
      });
    }
  };
}

module.exports = customerQueryFactory;
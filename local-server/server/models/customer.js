module.exports = function(Customer) {

  Customer.getCustomer = function(customerId, callback) {
    console.log('remoteMethod getCustomer:',customerId)
    var db = Customer.app.datasources.RestAPIService;
    return db.getCustomer(customerId, callback);
  };

  Customer.remoteMethod('getCustomer',{
    http: {
      path: '/me',
      verb: 'get'
    },
    returns: { type: 'object', root: true },
    accepts: {
      arg: 'customerId',
      type: 'string',
      required: true,
      http: (ctx) => ctx.req.headers['x-customer-id']
    }
  });
};

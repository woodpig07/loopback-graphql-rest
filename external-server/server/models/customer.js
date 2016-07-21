module.exports = function(Customer) {

  Customer.getMe = function(customerId, callback) {
    Customer.find({where: {username: customerId}}, callback);
  };

  Customer.getMyCards = function(customerId, callback) {
    var cardModel = Customer.app.models.Card;

    cardModel.find({where: {customerId: customerId}}, callback);
  };

  Customer.remoteMethod('getMe',{
    http: {
      path: '/getMe',
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

  Customer.remoteMethod('getMyCards',{
    http: {
      path: '/getMyCards',
      verb: 'get'
    },
    returns: { type: 'array', root: true },
    accepts: {
      arg: 'customerId',
      type: 'string',
      required: true,
      http: (ctx) => ctx.req.headers['x-customer-id']
    }
  });
};

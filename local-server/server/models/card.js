module.exports = function(Card) {

  Card.getCustomerCards = function(customerId, callback) {
    var db = Card.app.datasources.RestAPIService;
    db.getCustomerCards(customerId, callback);
  };

  Card.addCard = function(customerId, cardNumber, code, domain, status, callback) {
    var db = Card.app.datasources.RestAPIService;
    db.addCard(customerId, cardNumber, code, domain, status, callback);
  };

  Card.remoteMethod('getCustomerCards',{
    http: {
      path: '/myCards',
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

  Card.remoteMethod('addCard',{
    http: {
      path: '/myCards',
      verb: 'post'
    },
    returns: { type: 'array', root: true },
    accepts: [
      {
        arg: 'customerId',
        type: 'string',
        required: true,
        http: (ctx) => ctx.req.headers['x-customer-id']
      },
      {
        arg: 'cardNumber',
        type: 'string',
        required: true
      },
      {
        arg: 'code',
        type: 'string',
        required: true
      },
      {
        arg: 'domain',
        type: 'string',
        required: false
      },
      {
        arg: 'status',
        type: 'number',
        required: false
      }
    ]
  });
};

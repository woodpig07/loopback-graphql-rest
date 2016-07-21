module.exports = function(app) {
  var customerModel = app.models.Customer;
  var cardModel = app.models.Card;

  customerModel.create([
    {username: 'test1', firstName: 't1', lastName: 'customer'},
    {username: 'test2', firstName: 't2', lastName: 'customer'},
    {username: 'test3', firstName: 't3', lastName: 'customer'}
  ], function(err) {
    if (err) throw err;
    console.log('> customer models created');
  });

  cardModel.create([
    {cardNumber: 'testCard1', code: 't1', customerId: 'test1', domain: 'msr', status: 1},
    {cardNumber: 'testCard11', code: 't11', customerId: 'test1', domain: 'svc', status: 0},
    {cardNumber: 'testCard2', code: 't2', customerId: 'test2', domain: 'msr', status: 1},
    {cardNumber: 'testCard22', code: 't22', customerId: 'test2', domain: 'svc', status: 0},
    {cardNumber: 'testCard3', code: 't3', customerId: 'test3', domain: 'msr', status: 1},
    {cardNumber: 'testCard33', code: 't33', customerId: 'test3', domain: 'svc', status: 0}
  ], function(err) {
    if (err) throw err;
    console.log('> card models created');
  });  
};

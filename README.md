# loopback-graphql-rest

An demo to integrate [GraphQL](https://github.com/graphql/graphql-js) with [loopback](https://docs.strongloop.com/) API service.

## run external server

External server provides REST operations for `customer` and `card` models on in-memery databse.
Runing on http://localhost:3001/api

```
cd external-server
npm install
node .
```

## run local server

Local server provides ghraphQL operations on http://localhost:3001/graphql

```
cd local-server
npm install
node .
```

## test example
Query customer data
```
curl -XPOST --header 'x-customer-id:test1'  --data 'query={customer{username,lastName,cards{cardNumber}}}' http://localhost:3000/graphql
```

results
```
{
  "data": {
    "customer": {
      "username": "test1",
      "lastName": "customer",
      "cards": [
        {
          "cardNumber": "testCard1"
        },
        {
          "cardNumber": "testCard11"
        },
        {
          "cardNumber": "testCard111"
        },
        {
          "cardNumber": ""
        },
        {
          "cardNumber": "test1card"
        }
      ]
    }
  }
}
```

Mutation: add a card
```
curl -XPOST --header 'x-customer-id:test3' --header 'Content-Type: application/json' --data '{"query": "mutation($cardNumber:String!,$code:String!,$domain:String!,$status:String!){addCard(cardNumber:$cardNumber,code:$code,domain:$domain,status:$status){cardNumber,code,domain,status}}","variables": {"cardNumber": "test3card","code": "tttt3","domain": "msr","status": "0"}}' http://localhost:3000/graphql
```

result
```
{
  "data": {
    "addCard": {
      "cardNumber": "test3card",
      "code": "tttt3",
      "domain": "msr",
      "status": "0"
    }
  }
}
```

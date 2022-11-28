# api-transaction

This api for our react transaction app which is at `..link to react app repo..`

..About..

## How to use

1. clone this project
2. Run `cd api-transaction`
3. Run `npm i`
4. 4. Run `npm run dev`. you must have `nodemon` otherwise run `npm i nodemon` then run `npm run dev`

## API

This api server will have 2 api end points

1. User endpoint
2. Transacting endpoint
3. All the endpoint will follow the following path `{rooturl}/api/v1`

### User API

User api will use the following path `{rooturl}/api/v1/user`. This api will allow client to crate user, login and more
|#|PATH|METHOD|IS PRIVATE|DESCRIPTION|
|1.|`/`|POST|FALSE|CREATE NEW USER|

### Transaciton API

User api will use the following path `{rooturl}/api/v1/transaction`. This api will allow client to do CRUD operation on transaction table

| # | PATH | method | IS PRIVATE | DESCRIPTION |
| 1. | '/' | GET | true | allow user to fetch their own transaction only |
| 2. | '/' | POST | true | allow user tO post new transaction, data should be send as an object{} |
| 3. | '/' | GET | true | allow user to fetch their own transaction only |
| 4. | '/' | DELETE | true | allow user to delete single or multiple of their own transaction only |

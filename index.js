//1 import json server
const jsonserver = require('json-server');

//2 create aserver application using jsonserver
const server = jsonserver.create()

//3 set a path for db.json file
const router = jsonserver.router('db.json')

//4 return a middleware used by the jsonserve
const middleware = jsonserver.defaults()

//5 set a port number
const port = process.env.PORT || 3001

//6 use in server
server.use(middleware)
server.use(router)

//7 to run port
server.listen(port, () => {
    console.log('Server started on ' + port);
})

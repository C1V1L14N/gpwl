const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')


app.use(parser.json());


MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
    const db = client.db('gpwl-db');
    const pedalCollection = db.collection('pedal-collection')

    const pedalRouter = createRouter(pedalCollection);
    app.use('/api/pedals', pedalRouter)
})
    .catch(console.error);

app.listen(3000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});
const express = require('express');
const cors = require('cors')
const app = express();
const parser = require('body-parser');
app.use(parser.json());
app.use(cors());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')






MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
    const db = client.db('gpwl_db');
    const pedalCollection = db.collection('pedal_collection')

    const pedalRouter = createRouter(pedalCollection);
    app.use('/api/pedals', pedalRouter)
})
    .catch(console.error);

app.listen(3000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});
















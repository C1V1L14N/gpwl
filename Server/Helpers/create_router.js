const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

const router = express.Router();

  //INDEX
router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.send(docs))
    .catch((error) => {
        console.log(error);
        res.status(500)
        res.json9({status: 500, error: error});
    });
});

  //SHOW
router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .findOne({ _id: ObjectID(id) })
    .then((doc) => {
        res.json(doc);
    })
    .catch((error) => {
        console.log(error);
        res.status(500)
        res.json9({status: 500, error: error});
    })
});

// CREATE - POST -> /api/pedals
router.post('/', (req, res) => {
    const newData = req.body;
    collection
    .insertOne(newData)
    .then((result) => {
    res.json(result.ops[0])
    })
    .catch((error) => {
    console.log(error);
    res.status(500)
    res.json9({status: 500, error: error});
    })
})

//DESTROY
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne({ _id: ObjectID(id) })
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        console.log(error);
        res.status(500)
        res.json9({status: 500, error: error});
    });
})

//UPDATE
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    collection
    .findOneAndUpdate(
        { _id: ObjectID(id) },
        { $set: updatedData },
        { returnOriginal: false }
    )
    .then((result) => {
        res.json(result.value)
    })
    .catch((error) => {
        console.log(error);
        res.status(500)
        res.json9({status: 500, error: error});
    });
})

    



return router;

};

module.exports = createRouter;
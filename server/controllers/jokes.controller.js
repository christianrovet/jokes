const Jokes = require("../models/jokes.model");

//DATABASE FUNCTIONALITY

module.exports = {

    //get all
    getAll(req, res) {
        console.log("getAll method initialized")
        Jokes.find()
        .then((allJokes) => res.json({jokes: allJokes }))
        .catch((err) => res.json({ message: 'Cannot get All Jokes', error: err }))
    },

    //get by ID or get one
    getOne(req, res) {
        console.log("getOne method initialized")
        Jokes.findOne({_id: req.params.id})
        .then((oneJokes) => res.json({jokes: oneJokes }))
        .catch((err) => res.json({ message: 'Cannot get Joke', error: err }))
    },

    //create method
    create(req, res){
        console.log("create method initialized")
        Jokes.create(req.body)
        .then((newJokes) => res.json({jokes: newJokes }))
        .catch((err) => res.json({ message: 'Cannot create Joke', error: err }))
    },

    //update method
    update(req, res){
        console.log("update method initialized")
        Jokes.findByIdAndUpdate(req.params.id, req.body)
        .then((updateJokes) => res.json({jokes: updateJokes }))
        .catch((err) => res.json({ message: 'Cannot Update Joke', error: err }))
    },

    //delete method
    delete(req, res){
        console.log("delete method initialized")
        Jokes.findByIdAndDelete(req.params.id)
        .then((deleteJokes) => res.json({jokes: deleteJokes }))
        .catch((err) => res.json({ message: 'Cannot Delete Joke', error: err }))
    }
}
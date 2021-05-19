const jokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
    //returns all jokes with getAll Method
    app.get('/api/jokes', jokesController.getAll);

    //return one joke with getOne Method
    app.get('/api/jokes/:id', jokesController.getOne);

    //creates a new joke with create Method
    app.post('/api/jokes/create/new', jokesController.create);

    //updates a joke based on id with Update Method
    app.put("/api/jokes/update/:id", jokesController.update);

    //deletes a joke based on id with Delete Method
    app.delete("/api/jokes/delete/:id", jokesController.delete);
}
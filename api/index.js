const express = require('express');

const app = express();
const port = 80;


const todosRepository = new class TodosRepository {
    constructor() {
        this.currentId = 0;
        this.db = new Map();
    }

    add(description) {
        this.db.set(this.currentId++, { description, done: false });
        return this.db.length - 1;
    }

    setDone(id, done = true) {
        if (this.db.has(id)) {
            this.db.get(id).done = done;
        }
    }

    remove(id) {
        if (this.db.has(id)) {
            this.db.delete(id);
        }
    }

    getAll() {
        return new Promise(resolve =>
            resolve(Array.from(this.db.values())));
    }
};

todosRepository.add('Finish R homework');
todosRepository.add('Explore docker');


app.get('/', async (req, res) => {
    const todos = await todosRepository.getAll();
    res.json(todos);
});


app.listen(port, () => {
    console.log(`API listening on port ${ port }`);
});

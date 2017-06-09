const express = require('express');

const app = express();
const port = 80;


let todos = new class Todos {
    constructor(){
        let currentId = 0;
        this.db = new Map();
    }

    async add(description) {
        this.db.set(currentId, { description, done: false });
        return this.db.length - 1;
    }

    async setDone(id, done = true) {
        if (this.db.has(id)) {
            this.db.get(id).done = done;
        }
    }

    async remove(id) {
        if (this.db.has(id)) {
            this.db.delete(id);
        }
    }

    async getAll() {
        return this.db.values();
    }
};


app.get('/todo', (req, res) => {
    let todos = Array.from(await todos.getAll());
    res.json(todos);
});


app.listen(port, () => {
    console.log(`API listening on port ${ port }`);
});

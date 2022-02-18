// build your `Task` model here
// build your `Resource` model here
const db = require('../data/db-config');

function get() {
    return db('tasks');
}

async function getById(id) {
    const result = await db('tasks')
        .where('task_id', id);
    if(result.length < 1) {
        return null;
    }
    return result;
}

function add(resource) {
    return db('tasks')
        .insert(resource)
        .then(([id]) => {
            return getById(id);
        })
}

module.exports = {
    get,
    add
};
// build your `Resource` model here
const db = require('../data/db-config');

function get() {
    return db('resources');
}

async function getById(id) {
    const result = await db('resources')
        .where('resource_id', id);
    if(result.length < 1) {
        return null;
    }
    return result;
}

function add(resource) {
    return db('resources')
        .insert(resource)
        .then(([id]) => {
            return getById(id);
        })
}

module.exports = {
    get,
    add
};
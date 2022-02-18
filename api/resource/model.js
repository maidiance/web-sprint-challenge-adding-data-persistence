// build your `Resource` model here
const db = require('./../../data/dbConfig');

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

async function add(resource) {
    const id = await db('resources')
        .insert(resource);
    const result = getById([id]);
    const added = {
        resource_description: result.resource_description,
        resource_id: result.resource_id,
        resource_name: result.resource_name
    };
    return added;
}

module.exports = {
    get,
    add
};
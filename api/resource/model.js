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
    const result = await getById([id]);
    const added = {
        resource_description: result[0].resource_description,
        resource_id: result[0].resource_id,
        resource_name: result[0].resource_name
    };
    console.log(added);
    return added;
}

module.exports = {
    get,
    add
};
// build your `Project` model here
const db = require('./../../data/dbConfig');

function get() {
    return db('projects');
}

async function getById(id) {
    const result = await db('projects')
        .where('project_id', id);
    if(result.length < 1) {
        return null;
    }
    return result;
}

function add(project) {
    return db('projects')
        .insert(project)
        .then(([id]) => {
            return getById(id);
        })
}

module.exports = {
    get,
    add
};
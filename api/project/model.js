// build your `Project` model here
const db = require('./../../data/dbConfig');

async function get() {
    const projects = await db('projects');
    console.log(projects);
    const result = [];
    projects.forEach(project => {
        result.push({
            ...project,
            project_completed: project.project_completed ? true : false
        })
    })
    return result;
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
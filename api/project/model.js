// build your `Project` model here
const db = require('../data/db-config');

function get() {
    return db('projects as p');
}

module.exports = {
    get
};
// build your `/api/projects` router here
const express = express;
const Projects = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.get()
        .then(projects => {
            res.json(projects);
        })
        .catch(() => {
            res.status(500).json({message: 'could not get projects'});
        })
})

router.post('/', (req, res) => {
    const project = req.body;
    Projects.add(project)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(() => {
            res.status(500).json({message: 'could not post project'});
        })
})

module.exports = router;
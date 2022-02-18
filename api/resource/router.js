// build your `/api/resources` router here
// build your `/api/projects` router here
const express = express;
const Resources = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.get()
        .then(resources => {
            res.json(resources);
        })
        .catch(() => {
            res.status(500).json({message: 'could not get resources'});
        })
})

router.post('/', (req, res) => {
    const resource = req.body;
    Resources.add(resource)
        .then(posted => {
            res.status(201).json(posted);
        })
        .catch(() => {
            res.status(500).json({message: 'could not post resource'});
        })
})

module.exports = router;
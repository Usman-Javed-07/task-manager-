const express = require('express')
const {regiter} = require('../controllers/auth')
const { getAllJobs } = require('../controllers/jobs')
const router = express.Router()

const {
    getAllJobs,
    getJob,
    createjob,
    updatejob,
    deleteJob
} = require('../controllers/jobs')

router.route('/').post(createjob).get(getAllJobs)
router.route('/:id').get(getJob).delete(deleteJob).patch(updatejob)

module.exports = router
const getAllJobs = async (req , res) => {
    res.send('get all jobs')
}
const getJob = async (req , res) => {
    res.send('get job')
}
const createjob = async (req , res) => {
    res.send('create job')
}
const updatejob = async (req , res) => {
    res.send('create job')
}
const deleteJob = async (req , res) => {
    res.send('delete job')
}


module.exports = {
 getAllJobs,
 getJob,
 createjob,
 updatejob,
 deleteJob
}


const getAllTasks = (req, res) => {
    res.send('Get all Tasks')
}
const createTask  =  (req, res) => {
    res.send('Create Task')
}
const getTask  =  (req, res) => {
    res.send('Get Single Task')
}
const updateTask  =  (req, res) => {
    res.send('update Task')
}
const deleteTask  =  (req, res) => {
    res.send('Delete Task')
}


module.exports = {
    getAllTasks, 
    createTask,
    getTask, 
    updateTask, 
    deleteTask
}
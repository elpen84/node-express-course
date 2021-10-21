

const getAllTasks = (req, res) => {
    res.send('Get all Tasks')
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
    getTask, 
    updateTask, 
    deleteTask
}
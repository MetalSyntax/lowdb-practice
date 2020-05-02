const { getConnection } = require ('../database')
const {v4} = require('uuid')

const getTasks = (req, res) => {
    const tasks = getConnection().get('tasks').value();
    res.json(tasks);
};

const getTask = (req, res) => {
    const task = getConnection().get('tasks').find({id: req.params.id}).value();
    res.json(task)
}

const createTask = (req, res) => {
    const newTasks = {
        id: v4(),
        name: req.body.name,
        description: req.body.description
    };
    getConnection().get('tasks').push(newTasks).write();
    res.send('received')
}

const updateTask =  async (req, res) => {
const result = await getConnection().get('tasks').find({id: req.params.id})
    .assign(req.body)
    .write();
    res.json(result)
}

const deleteTask = (req, res) => {
    const result = getConnection().get('tasks').remove({id: req.params.id}).write();
    res.json(result)
}

module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
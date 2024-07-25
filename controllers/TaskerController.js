const TaskerModel = require('../models/TaskerModel');

module.exports.getTask = async (req, res) => {
    try {
        const tasks = await TaskerModel.find();
        res.send(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.saveTask = async (req, res) => {
    const { Title, Description } = req.body;

    try {
        const newTask = await TaskerModel.create({
            Title,
            Description,
            Complete: false // Assuming new tasks are not complete by default
        });

        console.log("Added new task:", newTask);
        res.status(201).json(newTask);
    } catch (error) {
        console.error("Error adding new task:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.updateTask = async (req, res) => {
    const { _id, Title, Description, Complete } = req.body;
    try {
        const updatedTask = await TaskerModel.findByIdAndUpdate(_id, { Title, Description, Complete }, { new: true });
        console.log("Updated task:", updatedTask);
        res.send("Updated Successfully");
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.deleteTask = async (req, res) => {
    const { _id } = req.params; 
    try {
        const result = await TaskerModel.findByIdAndDelete(_id);

        if (!result) {
            return res.status(404).json({ error: 'Task not found' }); // Handle case where task does not exist
        }

        res.status(200).send("Deleted Successfully");
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports.singleTask = async (req, res) => {
    const { id } = req.params;
    console.log("Requested ID:", id);

    try {
        const task = await TaskerModel.findById(id);
        console.log("Found task:", task);
        if (!task) {
            return res.status(404).send('Task not found');
        }
        res.json(task);
    } catch (error) {
        console.error("Error fetching task:", error);
        res.status(500).send('Internal Server Error');
    }
};

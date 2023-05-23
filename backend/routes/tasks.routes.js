const { TaskModel } = require("../models/TaskModel ");

const taskRouter = require("express").Router();



taskRouter.get("/", async (req, res) => {
    let {userId } = req.body
    try {
        const task = await TaskModel.find({userId })
        res.send(task)
    } catch (error) {
        res.status(500).send({
            error: "Can't get Your task",
            message: "Something went wrong!",
        })
    }
})
taskRouter.post("/", async (req, res) => {
    const { title, listId, userId } = req.body
    if (title && listId && userId) {
        try {
            const task = new TaskModel({ title, listId, userId })
            await task.save();
            res.send({
                message: "task Created!",
            })
        } catch (error) {
            res.status(400).send({
                error: "Can't create Your task",
                message: "Something went wrong!",
            })
        }

    } else {
        res.status(400).send({
            error: "Can't create Your task",
            message: "Something went wrong!",
        })
    }
})

taskRouter.patch("/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id)
    
    try {
        await TaskModel.findByIdAndUpdate(id, { ...req.body })
        res.send({
            message: "Task Updated!",
        })
    } catch (error) {
        res.status(400).send({
            error: "Can't Update Your task",
            message: "Something went wrong!",
        })
    }

})


taskRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body

    try {
        await TaskModel.deleteOne({ _id: id, userId });
        res.send({
            message: "Completed Successfully",
        })
    } catch (error) {
        res.status(400).send({
            error: "Can't Delete",
            message: "Something went wrong!",
        })
    }

})



module.exports = {
    taskRouter
}

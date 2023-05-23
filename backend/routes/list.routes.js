const listRouter = require("express").Router();
const { ListModel } = require("../models/ListModel");



listRouter.get("/", async (req, res) => {
    let { userId } = req.body
    try {
        const list = await ListModel.find({ userId })
        res.send(list)
    } catch (error) {
        res.status(500).send({
            error: "Can't get Your List",
            message: "Something went wrong!",
        })
    }
})
listRouter.post("/", async (req, res) => {
    const { userId } = req.body
    if (userId) {
        try {
            const list = new ListModel({ userId })
            await list.save();
            res.send({
                message: "List Created!",
            })
        } catch (error) {
            res.status(400).send({
                error: "Can't create Your List",
                message: "Something went wrong!",
            })
        }

    } else {
        res.status(400).send({
            error: "Can't create Your List",
            message: "Something went wrong!",
        })
    }
})

module.exports = {
    listRouter
}

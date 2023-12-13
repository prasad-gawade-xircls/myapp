import Express from "express"
const app = Express()
const port = 4000

app.get('/jokes', (req, res) => {
    res.send([
        {
            id: "1",
            name: "joke1",
            desc: "this is joke1"
        },
        {
            id: "2",
            name: "joke2",
            desc: "this is joke2"
        },
        {
            id: "3",
            name: "joke3",
            desc: "this is joke3"
        },
        {
            id: "4",
            name: "joke4",
            desc: "this is joke4"
        },
        {
            id: "5",
            name: "joke5",
            desc: "this is joke5"
        }
    ])
})

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
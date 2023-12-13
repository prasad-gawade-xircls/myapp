import Express from "express"
const app = Express()
const port = 4000

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/info', (req, res) => {
    res.send([
        {
            id: "1",
            name: "abc",
            desc: "this is abc"
        },
        {
            id: "2",
            name: "efg",
            desc: "this is efg"
        },
        {
            id: "3",
            name: "pqr",
            desc: "this is pqr"
        },
        {
            id: "4",
            name: "xyz",
            desc: "this is xyz"
        }
    ])
})

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
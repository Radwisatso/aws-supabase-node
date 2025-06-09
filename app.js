if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get("/", (_, res) => {
    console.log(process.env)
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})
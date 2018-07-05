const express = require('express')

const userRouter = require('./user')


const app = express()

const PORT = 80

app.use(`/user`, userRouter)

app.listen(PORT, err=>{
    console.info(`app is starting at port${PORT}`)
})
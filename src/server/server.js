const express = require('express')
const {join} = require('path')
const myPath = join(__dirname, '/../dist')
console.log("===1st dirname =>", myPath )
const app = express()
    // .use(require('./webpack-middleware'))
    // .use(express.static(join(__dirname, '/../dist')))
    .use('/api', require('./api'))
    // .get('*/', (req, res) => {
    //     res.sendFile(join(__dirname, '/../index.html'))
    //     //console.log("====>", __dirname , join(__dirname, '..','index.html'))
    // })

    process.env.PORT = 4000

const sever = app.listen(process.env.PORT || 1337, () => 
    console.log("listens on port",process.env.PORT)
)


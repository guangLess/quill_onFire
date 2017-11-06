const router = require('express').Router()
module.exports = router
const Boards = require('../db/emoji')

router.get('/hello', (req, res, next) => {
    res.status(200).json("Hello api from /api/hello")
})

router.get('/board', (req, res, next) => {
    Boards.findAll({
        where: {
            category: 'nature'
        }
    }).then( data => {
        console.log("data------->", data)
        res.status(200).json(data)
    }
    )
})

router.use((req, res, next) => {
    const error = new Error('Nor Found')
    error.status = 404
    next(error)
})
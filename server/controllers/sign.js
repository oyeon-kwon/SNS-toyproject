const jwt = require('jsonwebtoken')
const { user } = require('../models')

module.exports = {
    signin : async (req, res) => {
        const { email, password } = req.body.userInfo

        const userInfo = user.create({
            email: email,
            password: password
        })
        res.status(200).redirect('/sign/in')
    },
    login : async (req, res) => {
        const { email, password } = req.body.userInfo

        // DB에서 찾기

        res.status(200).redirect('/log/in')
    },
    logout : async (req, res) => {
        user.destory({where: {id : req.query.id}})
        res.status(200)
    },
}
const jwt = require('jsonwebtoken')
const { post } = require('../models')

module.exports = {
    createPost : async (req, res) => {
        const { body } = req.body.userInfo

        // 유저 정보 유효성 검사 후 진행
        const post = post.create({
            body: body
        })
        res.status(200)
    },
    getPost : async (req, res) => {
        const { id } = req.query.id

        // DB에서 찾기 res.send()

        res.status(200)
    },
    deletePost : async (req, res) => {
        post.destory({where: {id : req.query.id}})
        res.status(200)
    },
}
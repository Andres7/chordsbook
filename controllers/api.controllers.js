const srv = require('../services/api.service');

const control = {

    async listar(req, res) {
        try {
            let data = await srv.listar(req.body.name, req.body.value);
            res.status(200).json({ status: true, data })
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: false, data: error })
        }
    },

    async song(req, res) {
        try {
            let data = await srv.song(req.body.t);
            res.status(200).send({ status: true, data })
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: false, data: error })
        }
    }

}
module.exports = control;
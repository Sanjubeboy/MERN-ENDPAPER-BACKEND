const express = require('express')
const router = express.Router()
const listModel = require('../models/lists')
const {getAlllists, addlist, getlistById, updatelistById, deletelistById, getlist} = require('../controllers/lists')

router.route('/').get(getAlllists).post(addlist)

router.route('/:id').get(getlist, getlistById).patch(getlist, updatelistById).delete(getlist, deletelistById)


module.exports = router
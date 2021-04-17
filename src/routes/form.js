const { Router } =require('express')
const router = Router()
const { createForm,getForm} = require('../controllers/form.controller')

router.route('/')
    .post(createForm)
    .get(getForm)

module.exports=router
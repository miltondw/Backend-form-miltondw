const { Router } =require('express')
const router = Router()
const { createForm,getForm} = require('../controllers/form.controller')

router.route('https://miltondw.herokuapp.com/')
    .post(createForm)
    .get(getForm)

module.exports=router
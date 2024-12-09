import { Router } from "express";
import * as rh from './requestHandler.js'

const router=Router();

router.route('/adduser').post(rh.addUser)
router.route('/login').post(rh.login)
// router.route('/getUser').get(Auth,rh.getUser)

export default router
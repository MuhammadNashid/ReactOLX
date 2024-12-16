import { Router } from "express";
import * as rh from './requestHandler.js'
import Auth from './middle/Auth.js';
const router=Router();

router.route('/adduser').post(rh.adduser)
router.route('/login').post(rh.login)
router.route('/verify').post(rh.verifyEmail)
router.route('/getuser').get(Auth,rh.getUser)
router.route('/getuserData').get(Auth,rh.getUserData)
router.route('/adduserData').post(Auth,rh.addUserData)
router.route('/edituserData').put(Auth,rh.editUserData)
router.route('/deleteData').delete(Auth,rh.deleteUser)
router.route('/addPost').post(Auth,rh.addPost)
router.route('/enqPost').post(Auth,rh.enqPost)
router.route('/enquiries').get(Auth,rh.enquirees)
router.route('/getPosts').get(Auth, rh.getPosts)
router.route('/getAllPosts').get(Auth, rh.getAllPosts)
router.route('/getPost/:id').get(Auth, rh.getPost)
router.route('/updatePost/:id').put(Auth,rh.updatePost)
router.route('/deletePost/:id').delete(Auth, rh.deletePost)

export default router
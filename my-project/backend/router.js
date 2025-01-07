import { Router } from "express";
import * as request from './requestHandler.js'
import Auth from "./middleware/auth.js";

const router=Router()

router.route('/addservice').post(request.addService)
router.route('/getservice').get(request.getServices)
router.route('/addprojects').post(request.addProject)
router.route('/getprojects').get(request.getProjects)
router.route('/addreview').post(request.addReview)
router.route('/getreview').get(request.getReview)

export default router
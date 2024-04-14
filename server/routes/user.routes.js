import { registerUser, loginUser } from "../controller/user.controller.js";
import { Router } from "express";

const router = Router()

router.route("/register").post(registerUser)

router.route('/login').post(loginUser)

export { router } 

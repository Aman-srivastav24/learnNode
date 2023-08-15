import express from 'express';
import { User } from '../models/user.js';
import {  getAllUsers, getUserById, login, register} from '../controllers/user.js';
const router = express.Router();

router.get("/api",getAllUsers);

router.post("/new",register);
router.post("/login",login);

router.route("/userid/:id").get(getUserById)

export default router;
import express from 'express';
import { User } from '../models/user.js';
import { deleteUserById, getAllUsers, getUserById, register, specialFunc, updateUserById } from '../controllers/user.js';
const router = express.Router();

router.get("/api",getAllUsers);

router.post("/new",register);

router.get("/userid/special",specialFunc);

router.
 route("/userid/:id")
.get(getUserById)
.put(updateUserById)
.delete(deleteUserById);

export default router;
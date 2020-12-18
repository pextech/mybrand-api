import express from 'express';
import { userLogin, registerPost } from '../controllers/userController';

/**
 * @swagger
 * /signUp:
 *   post:
 *     tags:
 *       - Users
 *     name: Signup
 *     summary: Creates a new user
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                 type: string
 *                password:
 *                 type: string
 *     responses:
 *       201:
 *             description: user created successfully.
 *       400:
 *             description: Bad request.
 *       409:
 *             description: The email is already in the system.
 * */

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Users
 *     name: login
 *     summary: login a user
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                 type: string
 *                password:
 *                 type: string
 *     responses:
 *       201:
 *             description: user Loggedin successfully.
 *       400:
 *             description: Bad request.
 *       409:
 *             description: The email is already in the system.
 * */

const router = express.Router();

router.post('/login', userLogin);
router.post('/signUp', registerPost);

export default router;

import express from 'express';
import { contactPost, contactDelete, contactGet } from '../controllers/contactController';
import auth from '../auth/checkAuth';

/**
 * @swagger
 * /messages/add:
 *   post:
 *     tags:
 *       - Messages
 *     name: Messages
 *     summary: Creates Message
 *     consumes:
 *        - multipart/form-data
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                   type: string
 *                   in: formData
 *                phone:
 *                   type: Number
 *                   in: formData
 *                email:
 *                   type: string
 *                   in: formData
 *                message:
 *                   type: string
 *                   in: formData
 *     responses:
 *       201:
 *             description: query successfully Created.
 *       400:
 *             description: Bad request.
 * */

/**
 * @swagger
 * /messages:
 *   get:
 *     tags:
 *       - Messages
 *     name: Messages
 *     summary: Retrieve all Messages
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: auth
 *         in: header
 *     responses:
 *       200:
 *             description: Message successfully Retrieved.
 * */

/**
 * @swagger
 * /messages/delete/{id}:
 *   delete:
 *     tags:
 *       - Messages
 *     name: Messages
 *     summary: delete one Message
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: auth
 *         in: header
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: Message successfully deleted.
 * */

const router = express.Router();

router.post('/messages', contactPost);
router.get('/messages', auth, contactGet);
router.delete('/messages/:id', auth, contactDelete);

export default router;

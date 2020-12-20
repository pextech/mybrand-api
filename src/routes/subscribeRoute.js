import express from 'express';
import { subscribeGet, subscribePost, SubscribeDelete } from '../controllers/subscribeController';
import auth from '../auth/checkAuth';

const router = express.Router();

/**
 * @swagger
 * /subscribe:
 *   post:
 *     tags:
 *       - Subscription
 *     name: Subscription
 *     summary: Creates Subscriptions
 *     consumes:
 *        - multipart/form-data
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
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
 * /subscribe/get:
 *   get:
 *     tags:
 *       - Subscription
 *     name: Subscription
 *     summary: Retrieve all Subscriptions
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
 * /subscribe/delete/{id}:
 *   delete:
 *     tags:
 *       - Subscription
 *     name: Subscription
 *     summary: delete one Subscriber
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
 *             description: Subscriber successfully deleted.
 * */

router.post('/subscribe', subscribePost);
router.get('/subscribe', auth, subscribeGet);
router.delete('/subscribe/:id', auth, SubscribeDelete);

export default router;

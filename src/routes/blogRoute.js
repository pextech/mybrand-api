/* eslint-disable no-console */
import express from 'express';
import {
  blogPost, blogGet, blogDetail, blogDelete, BlogPatch, blogComment,
}
  from '../controllers/blogController';
import auth from '../auth/checkAuth';

/**
 * @swagger
 * /blog:
 *   post:
 *     tags:
 *       - Blogs
 *     summary: creating a blog
 *     requestBody:
 *        required: true
 *        content:
 *           multipart/form-data:
 *              schema:
 *                 type: object
 *                 required:
 *                    - Title
 *                    - Description
 *                    - image
 *                 properties:
 *                    Title:
 *                      type: string
 *                    Description:
 *                      type: string
 *                    image:
 *                      type: string
 *                      format: binary
 *     responses:
 *       201:
 *             description: Blog saved successfully
 *       400:
 *             description: Bad request.
 * */

/**
 * @swagger
 * /blog:
 *   get:
 *     tags:
 *       - Blogs
 *     name: Blog
 *     summary: Retrieve all blogs
 *     consumes:
 *        - application/json
 *     responses:
 *       200:
 *             description: Blogs successfully Retrieved.
 * */

/**
 * @swagger
 * /blog/{id}:
 *   get:
 *     tags:
 *       - Blogs
 *     name: Blog
 *     summary: retrieve single blog
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Blog id
 *     responses:
 *       200:
 *             description: Blog successfully Retrieved.
 *       404:
 *             description: Blog not found.
 *       500:
 *             description: server error.
 * */

/**
 * @swagger
 * /blog/{id}/comment:
 *   post:
 *     tags:
 *       - Blogs
 *     name: comment
 *     summary: add a comment to a blog
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                 type: string
 *                message:
 *                 type: string
 *     responses:
 *       201:
 *             description: Comment successfully added.
 *       400:
 *             description: Bad request.
 *       500:
 *             description: server error.
 * */

/**
 * @swagger
 * /blog/{id}:
 *   patch:
 *     tags:
 *       - Blogs
 *     summary: Update a blog
 *     content:
 *       - application/json
 *     parameters:
 *       - name: auth
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *             properties:
 *                Author:
 *                 type: string
 *                Title:
 *                 type: string
 *                Content:
 *                 type: string
 *     responses:
 *       200:
 *             description: Blog successfully updated.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 * */

/**
 * @swagger
 * /blog/{id}:
 *   delete:
 *     tags:
 *       - Blogs
 *     summary: Delete a blog
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: auth
 *         in: header
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: Successfully Deleted.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 * */

const router = express.Router();

router.post('/blog', auth, blogPost);
router.get('/blog', blogGet);
router.get('/blog/:id', blogDetail);
router.patch('/blog/:id', auth, BlogPatch);
router.delete('/blog/:id', auth, blogDelete);
router.post('/blog/:id/comment', blogComment);

export default router;

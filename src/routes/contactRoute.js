
import express from 'express';

const router = express.Router();


import {contact_post} from '../controllers/contactController';


 router.post('/',contact_post);


export default router;



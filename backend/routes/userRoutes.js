import express from 'express';

import userController from '../api/controllers/userController.js';

const usrCtrl = new userController();

const router = express();

export default router;

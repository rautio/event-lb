import express from 'express';

import eventController from '../api/controllers/eventController.js';

const eventCtrl = new eventController();

const router = express();

export default router;

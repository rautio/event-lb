import express from 'express';

import teamController from '../api/controllers/teamController.js';

const teamCtrl = new teamController();

const router = express();

export default router;

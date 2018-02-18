import express from 'express';

import userRoutes from './userRoutes.js';
import eventRoutes from './eventRoutes.js';
import teamRoutes from './teamRoutes.js';

const router = express();

router.use('user',userRoutes);
router.use('event',eventRoutes);
router.use('team',teamRoutes);

export default router;

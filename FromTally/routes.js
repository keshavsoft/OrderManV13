import express from 'express';

import { router as routerFromV2 } from "./V2/routes.js";

const router = express.Router();

router.use('/V2', routerFromV2);

export { router };
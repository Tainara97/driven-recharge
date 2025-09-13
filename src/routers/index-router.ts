import { Router } from "express";
import phoneRouter from "./phone-router";

const router = Router();
router.use(phoneRouter);

export default router;

import { Router } from "express";
import phoneRouter from "./phone-router";
import rechargeRouter from "./recharge-router";

const router = Router();
router.use(phoneRouter);
router.use(rechargeRouter);

export default router;

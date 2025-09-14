import { Router } from "express";
import phoneRouter from "./phone-router";
import rechargeRouter from "./recharge-router";
import summaryRouter from "./summary-router";

const router = Router();
router.use(phoneRouter);
router.use(rechargeRouter);
router.use(summaryRouter);

export default router;

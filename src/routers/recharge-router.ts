import { Router } from "express";
import { validateSchema } from "../middlewares/schema-middleware";
import rechargeSchema from "../schemas/recharge-schema";
import { createRecharge, getRechargesByNumber } from "../controllers/recharge-controller";

const rechargeRouter = Router();

rechargeRouter.post("/recharges", validateSchema(rechargeSchema), createRecharge);
rechargeRouter.get("/recharges/:number", getRechargesByNumber);

export default rechargeRouter;
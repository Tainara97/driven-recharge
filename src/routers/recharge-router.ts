import { Router } from "express";
import { validateSchema } from "../middlewares/schema-middleware";
import rechargeSchema from "../schemas/recharge-schema";
import { createRecharge } from "../controllers/recharge-controller";

const rechargeRouter = Router();

rechargeRouter.post("/recharges", validateSchema(rechargeSchema), createRecharge);

export default rechargeRouter;
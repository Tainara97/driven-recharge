import joi from "joi";
import { RechargeData } from "protocols/recharge-protocol";

const rechargeSchema = joi.object<RechargeData>({
  phoneId: joi.number().required(),
  amount: joi.number().min(10).max(1000).required()
});

export default rechargeSchema;
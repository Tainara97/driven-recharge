import joi from "joi";
import { PhoneData } from "protocols/phone-protocol";

const phoneSchema = joi.object<PhoneData>({
  phoneNumber: joi.string().length(11).required(),
  carrierId: joi.number().required(),
  name: joi.string().required(),
  description: joi.string().required(),
  document: joi.string().length(11).required()
});

export default phoneSchema;

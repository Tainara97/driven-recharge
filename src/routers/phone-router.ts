import { createPhone, getPhonesByDocument } from "../controllers/phone-controller";
import { Router } from "express";
import { validateSchema } from "../middlewares/schema-middleware";
import phoneSchema from "../schemas/phone-schema";

const phoneRouter = Router();

phoneRouter.post("/phones", validateSchema(phoneSchema), createPhone);
phoneRouter.get("/phones/:document", getPhonesByDocument);

export default phoneRouter;
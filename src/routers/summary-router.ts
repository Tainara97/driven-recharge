import { Router } from "express";
import { getSummaryByDocument } from "../controllers/summary-controller";

const summaryRouter = Router();

summaryRouter.get("/summary/:document", getSummaryByDocument);

export default summaryRouter;
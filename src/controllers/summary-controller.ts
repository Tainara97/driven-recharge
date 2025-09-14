import { Request, Response } from "express";
import { getSummarybyDocumentService } from "../services/summary-service";

export async function getSummaryByDocument(req: Request<{document: string}>, res: Response) {
    const summary = await getSummarybyDocumentService(req.params.document);

    res.send(summary);
};
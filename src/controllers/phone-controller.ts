import { Request, Response } from "express";
import { PhoneData } from "protocols/phone-protocol";
import { createPhoneService } from "../services/phone-service";

export async function createPhone(req: Request, res: Response) {
    const newPhone = await createPhoneService(req.body as PhoneData);

    res.status(201).send(newPhone);
}
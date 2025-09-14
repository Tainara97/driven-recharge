import { Request, Response } from "express";
import { RechargeData } from "../protocols/recharge-protocol";
import { createRechargeService } from "../services/recharge-service";

export async function createRecharge(req: Request, res: Response) {
    const newRecharge = await createRechargeService(req.body as RechargeData);

    res.status(201).send(newRecharge);
}
import { Request, Response } from "express";
import { RechargeData } from "../protocols/recharge-protocol";
import { createRechargeService, getRechargesByNumberService } from "../services/recharge-service";

export async function createRecharge(req: Request, res: Response) {
    const newRecharge = await createRechargeService(req.body as RechargeData);

    res.status(201).send(newRecharge);
}

export async function getRechargesByNumber(req: Request<{number: string}>, res: Response) {
    const recharges = await getRechargesByNumberService(req.params.number);

    res.send(recharges);
}
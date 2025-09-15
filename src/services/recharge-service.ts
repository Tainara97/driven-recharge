import { createRecharge, findRechargesByNumber } from "../repositories/recharge-repository";
import { RechargeData } from "../protocols/recharge-protocol";
import { findByNumber, findPhoneById } from "../repositories/phone-repository";

export async function createRechargeService(rechargeData: RechargeData) {
    const existingPhone = await findPhoneById(rechargeData.phoneId);
    if(!existingPhone) {
        throw {type: "notFound", message: "Phone not found"};
    }

    if(rechargeData.amount < 10 || rechargeData.amount > 1000) {
        throw {type: "unprocessable", message: "Amount not allowed"};
    }

    const newRecharge = await createRecharge(rechargeData);
    return newRecharge;
}

export async function getRechargesByNumberService(number: string) {
    const existingPhone = await findByNumber(number);
    if (!existingPhone) {
        throw { type: "notFound", message: "Phone number not found" };
    }

    const recharges = await findRechargesByNumber(number);
    return recharges;
}
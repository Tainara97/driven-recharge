import db from "../database";
import { Recharge, RechargeData } from "../protocols/recharge-protocol";


export async function createRecharge(rechargeData: RechargeData) {
    const {phoneId, amount} = rechargeData;
    const result = await db.query<Recharge>(`
        INSERT INTO recharges (phone_id, amount)
        VALUES ($1, $2)
        RETURNING id, phone_id AS "phoneId", amount, created_at AS "createdAt"
    `, [phoneId, amount]);

    return result.rows[0];
};


import { Recharge } from "protocols/recharge-protocol";
import db from "../database";
import { PhoneWithCarrier } from "../protocols/phone-protocol";

export async function findPhonesByDocument(document: string): Promise<PhoneWithCarrier[]> {
    const result = await db.query<PhoneWithCarrier>(`
        SELECT 
            phones.id AS "id",
            phones.phone_number AS "phoneNumber",
            phones.name,
            phones.description,
            phones.carrier_id AS "carrierId",
            carriers.name AS "carrierName"
        FROM phones
        JOIN carriers ON phones.carrier_id = carriers.id
        WHERE phones.document = $1;
    `, [document]);

    return result.rows;
}

export async function findRechargesByPhoneIds(phoneIds: number[]): Promise<Recharge[]> {
    if (phoneIds.length === 0) return [];

    const result = await db.query<Recharge>(`
        SELECT 
            id,
            phone_id AS "phoneId",
            amount,
            created_at AS "createdAt"
        FROM recharges
        WHERE phone_id = ANY($1)
    `, [[...phoneIds]]); 

    return result.rows;
}
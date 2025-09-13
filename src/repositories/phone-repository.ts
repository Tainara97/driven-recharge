import db from "../database";
import { Phone, PhoneData } from "../protocols/phone-protocol";

export async function createPhone(phoneData: PhoneData) {
    const {phoneNumber, carrierId, name, description, document} = phoneData;
    const result = await db.query<Phone>(`
        INSERT INTO phones (phone_number, carrier_id, name, description, document)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, phone_number AS "phoneNumber", carrier_id AS "carrierId", name, description, document
    `, [phoneNumber, carrierId, name, description, document]);

    return result.rows[0];
};

export async function findByNumber(phoneNumber: string) {
    const result = await db.query<Phone>(`
       SELECT * FROM phones WHERE phone_number = $1
    `, [phoneNumber]);

    return result.rows[0];
}

export async function findByDocument(document: string) {
    const result = await db.query<Phone>(`
        SELECT * FROM phones WHERE document = $1    
    `, [document]);

    return result.rows;
}
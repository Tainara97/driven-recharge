import { PhoneData } from "../protocols/phone-protocol";
import { createPhone, findByDocument, findByNumber } from "../repositories/phone-repository";

export async function createPhoneService(phoneData: PhoneData) {
    const existingPhone = await findByNumber(phoneData.phoneNumber);
    if(existingPhone) {
        throw {type: "conflict", message: "Phone number already exists"};
    }

    const phones = await findByDocument(phoneData.document);
    if (phones.length >= 3) {
        throw {type: "conflict", message: "Customer already has 3 phone numbers"};
    }

    const newPhone = await createPhone(phoneData);
    return newPhone;
}

export async function getPhonesByDocumentService(document: string) {
    const phones = await findByDocument(document);
    return phones;
}
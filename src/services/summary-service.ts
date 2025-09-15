import { PhoneWithCarrier } from "../protocols/phone-protocol";
import { Recharge } from "../protocols/recharge-protocol";
import { findPhonesByDocument, findRechargesByPhoneIds } from "../repositories/summary-repository";

export async function getSummarybyDocumentService(document: string) {
    const phones: PhoneWithCarrier[] = await findPhonesByDocument(document);

    const phoneIds = phones.map(phone => phone.id);

    const recharges: Recharge[] = await findRechargesByPhoneIds(phoneIds);

    const phonesWithRecharges = phones.map(phone => {
        const phoneRecharges = recharges.filter(r => r.phoneId === phone.id)

        return {
            phoneNumber: phone.phoneNumber,
            name: phone.name,
            description: phone.description,
            carrier: {
                carrierId: phone.carrierId,
                carrierName: phone.carrierName
            },
            recharges: phoneRecharges
        };
    });

    const summary = {
        document,
        phones: phonesWithRecharges
    };

    return summary;
}
export type Phone = {
    id: number;
    phoneNumber: string;
    carrierId: number;
    name: string;
    description: string;
    document: string;
}

export type PhoneWithCarrier = Phone & { carrierName: string };

export type PhoneData = Omit<Phone, "id">;

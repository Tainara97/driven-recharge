export type Phone = {
    id: number;
    phoneNumber: string;
    carrierId: number;
    name: string;
    description: string;
    document: string;
}

export type PhoneData = Omit<Phone, "id">;

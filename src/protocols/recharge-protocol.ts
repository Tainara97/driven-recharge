export type Recharge = {
    id: number;
    phoneId: number;
    amount: number;
    createdAt: Date;
  
}

export type RechargeData = Omit<Recharge, "id" | "createdAt">;
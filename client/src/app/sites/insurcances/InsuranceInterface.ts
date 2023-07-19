export interface Insurance {
  id: number;
  insuranceName: string;
  companyName: string;
  amount: number;
  payPeriodPerYear: number;
  endOfContract: Date;
  payDay: Date;
  isActive: boolean;
  isNecessary: boolean;
  percentageCover: number;
  createdAt: Date;
}

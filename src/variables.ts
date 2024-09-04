export const api: string = "https://api.paymongo.com/v1/links";

export type Data = {
  amount: number;
  description: string;
  remarks: string | undefined;
};

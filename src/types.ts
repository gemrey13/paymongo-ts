import { AxiosRequestConfig } from "axios";

export interface Data {
  amount: number;
  description: string;
  remarks?: string;
}

export interface responseData {
  id: string;
  type: string;
  attributes: ResponseAttributes;
}

export interface ResponseAttributes {
  amount: number;
  archived: boolean;
  currency: string;
  description: string;
  livemode: boolean;
  fee: number;
  remarks: string;
  status: string;
  tax_amount?: number | null;
  taxes: Array<string>;
  checkout_url: string;
  reference_number: string;
  created_at: number;
  updated_at: number;
  payments: Array<PaymentResponse>;
}

export interface PaymentResponse {
  id: string;
  type: string;
  attributes: PaymentAttributes;
}

interface Billing {
  address: {
    city: string;
    country: string;
    line1: string;
    line2: string;
    postal_code: number;
    state: string;
  };
  email: string;
  name: string;
  phone: number;
}

export interface PaymentAttributes {
  access_url: string;
  amount: number;
  balance_transaction_id: string;
  billing: Billing;
  currency: string;
  description: string;
  disputed: boolean;
  external_reference_number: string;
  fee: number;
  instant_settlement: string | null;
  livemode: boolean;
  net_amount: number;
  origin: string;
  payment_intent_id: string | null;
  payout: string | null;
  source: {
    id: string;
    type: string;
  };
  statement_descriptor: string;
  status: string;
  tax_amount: number | null;
  metadata: {
    pm_reference_number: string;
  };
  refunds: [];
  taxes: [];
  available_at: number;
  created_at: number;
  credited_at: number;
  paid_at: number;
  updated_at: number;
}

export interface PaymongoInterface {
  api: string;
  data: Data;
  options: AxiosRequestConfig;
  q: any;
  linkID: string;
  retrieveData: any;
  insert(data: Data): void;
  getPayLink(): Promise<any>;
  retrieve(): Promise<PaymentResponse>;
}

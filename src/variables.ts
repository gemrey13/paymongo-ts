import { responseData } from "./types";

export const api: string = "https://api.paymongo.com/v1/links";

export const responseQ: responseData = {
  id: "",
  type: "",
  attributes: {
    amount: 0,
    archived: false,
    currency: "",
    description: "",
    livemode: false,
    fee: 0,
    remarks: "",
    status: "",
    tax_amount: 0,
    taxes: [],
    checkout_url: "",
    reference_number: "",
    created_at: 0,
    updated_at: 0,
    payments: [],
  },
};

export const retrieveData = {
  id: "",
  type: "",
  attributes: {
    amount: 0,
    archived: false,
    currency: "",
    description: "",
    livemode: false,
    fee: 0,
    remarks: "",
    status: "",
    tax_amount: null,
    taxes: [],
    checkout_url: "",
    reference_number: "",
    created_at: 0,
    updated_at: 0,
    payments: [],
  },
};

import { responseData } from "./types";

export const api: string = "https://api.paymongo.com/v1/links";

export const options = {
  method: "POST",
  url: "",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
  data: {
    data: {
      attributes: {
        amount: 0,
        description: "",
        remarks: "",
      },
    },
  },
};

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
    checkot_url: "",
    reference_number: "",
    created_at: 0,
    updated_at: 0,
    payments: [],
  },
};

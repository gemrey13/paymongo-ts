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

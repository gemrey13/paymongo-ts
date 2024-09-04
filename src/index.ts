import { api as variableAPI, Data } from "./variables.ts";

class Paymongo {
  data: Data;

  constructor(private secretkey: string, public api: string = variableAPI) {
    this.secretkey = secretkey;
    this.api = api;
    this.data = {
      amount: data.amount,
      description: data.description,
      remarks: data.remarks || undefined,
    };
  }

  insert(data: Data) {
    this.data.amount = data.amount;
    this.data.description = data.description;
    this.data.remarks = data.remarks;
  }
  // createLink() {}
}

const paymongo = new Paymongo("sample_key");
const data: Data = {
  amount: 12154,
  description: "sample description",
  remarks: "sample remarks",
};
paymongo.insert(data);
console.log(paymongo.data);

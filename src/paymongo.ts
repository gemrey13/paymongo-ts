import { api as variableAPI, options as optionsAPI } from "./variables";
import { Data, Options } from "./types";
import axios, { AxiosRequestConfig } from "axios";

class Paymongo {
  data: Data;
  options: AxiosRequestConfig;

  constructor(private secretkey: string, public api: string = variableAPI) {
    this.secretkey = secretkey;
    this.api = api;
    this.data = {
      amount: 0,
      description: "",
      remarks: "",
    };
    this.options = { data: { data: {} } };
  }

  insert(data: Data) {
    this.data.amount = data.amount * 100;
    this.data.description = data.description;
    this.data.remarks = data.remarks;
    this.formatData();
  }

  formatData() {
    this.options.url = this.api;
    this.options.data.data.attributes = this.data;
    this.options.method = "POST";
    this.options.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(this.secretkey + ":").toString("base64"),
    };
  }

  async getPayLink() {
    try {
      const response = await axios.request(this.options);
      const q = response.data;
      console.log(q);
    } catch (error) {
      console.log(error);
    }
  }
}

const paymongo = new Paymongo("sk_test_vHszhsmBVezafEUXDVYpdrpU");
const data: Data = {
  amount: 12154,
  description: "sample description",
  remarks: "sample remarks",
};
paymongo.insert(data);
// console.log(paymongo.options);
// console.log(paymongo.options.data.data);

paymongo.getPayLink();

import {
  api as variableAPI,
  options as optionsAPI,
  responseQ,
  retrieveData as rD,
} from "./variables";
import { Data, Options, responseData } from "./types";
import axios, { AxiosRequestConfig } from "axios";

export class Paymongo {
  data: Data;
  options: AxiosRequestConfig;
  q: responseData;
  linkID: string;
  retrieveData: responseData;

  constructor(private secretkey: string, public api: string = variableAPI) {
    this.secretkey = secretkey;
    this.api = api;
    this.data = {
      amount: 0,
      description: "",
      remarks: "",
    };
    this.options = { data: { data: {} } };
    this.q = responseQ;
    this.linkID = "";
    this.retrieveData = rD;
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
      const gr = response.data;
      this.q = gr.data;
      this.linkID = this.q.id;
      return this.q;
    } catch (error) {
      console.error("getPayLink: ", error);
    }
  }

  async retrieve() {
    try {
      this.options.headers = {
        Accept: "application/json",
        Authorization:
          "Basic " + Buffer.from(this.secretkey + ":").toString("base64"),
      };
      this.options.data = {};
      this.options.method = "GET";
      this.options.url = this.api + "/" + this.linkID;
      const response = await axios.request(this.options);
      const gr = response.data.data;
      return gr;
    } catch (error) {
      console.error("retrieve: ", error);
    }
  }
}

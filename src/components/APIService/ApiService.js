import axios from "axios";
import Settings from "../../Settings";

export default class ApiService {
  static getCategory = async () => {
    const response = await axios.get(
      Settings.serverURL + "/api/Category/api/getCategories"
    );
    return response.data;
  };
  static createBet = async (data) => {
    const response = await axios.post(
      Settings.serverURL + "/api/Category/api/getCategories",
      data
    );
    return response.data;
  };
  static registration = async (data) => {
    const response = await axios.post(
      Settings.serverURL + "/registration",
      data
    );
    return response.data;
  };
  static auth = async (data) => {
    const response = await axios.post(Settings.serverURL + "/auth", data);
    return response.data;
  };
  static createAuction = async (data) => {
    console.log(data);
    const response = await axios.post(
      Settings.serverURL + "/api/createAuction",
      data
    );
    return response.data;
  };
  static createBet = async (data) => {
    console.log(data);
    const response = await axios.post(
      Settings.serverURL + "/api/createBet",
      data
    );
    return response.data;
  };
  static getBets = async (data) => {
    console.log(data);
    const response = await axios.post(
      Settings.serverURL + "/api/getBets",
      data
    );
    return response.data;
  };
  static getAuctions = async () => {
    const response = await axios.get("https://localhost:7062/api/getAuctions");
    return response.data;
  };
}

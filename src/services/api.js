import http from "../utils/http";
import config from "../config";
import axios from "axios";

export const fetchForm = async () => {
  const url = config.endpoints.form.id;
  const response = await axios.get("http://192.168.5.29:8090/api/forms/3");
  return response.data;
};

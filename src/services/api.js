import http from "../utils/http";
import config from "../config";

export const fetchForm = async () => {
  const url = config.endpoints.form.id;
  const response = await http.get(`${url}/94`);
  return response.data;
};

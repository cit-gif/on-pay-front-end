import axios from "axios";
import { apiPrefixConfig, hostApiConfig } from "./config";
const apiClient = axios.create({
	baseURL: `${hostApiConfig}/${apiPrefixConfig}/`,
	headers: {
		"content-type": "application/json",
	},
});
export default apiClient;

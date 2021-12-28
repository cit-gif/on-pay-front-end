import apiClient from "../../config/apiClient";
import { userInterface } from "./user.interface";

export const createUser = async (user: userInterface) => {
	return await apiClient.post("register", user);
};

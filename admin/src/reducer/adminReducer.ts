import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type adminType = {
	firstName: string;
	lastName: string;
	email: string;
	avatar: string;
	phone: string;
	token: string;
	id: number;
};
type initType = {
	info: adminType;
	isLogged: boolean;
};
const initialState: initType = {
	info: {
		firstName: "",
		lastName: "",
		email: "",
		avatar: "",
		phone: "",
		token: "",
		id: -1,
	},
	isLogged: false,
};
export const adminSlice = createSlice({
	name: "admin",
	initialState,
	reducers: {
		setAdminWhenLogged(state, action: PayloadAction<adminType>) {
			state.info = action.payload;
			state.isLogged = true;
		},
	},
});

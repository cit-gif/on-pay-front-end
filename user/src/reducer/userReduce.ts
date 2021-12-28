import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type userType = {
	firstName: string;
	lastName: string;
	email: string;
	token: string;
	id: number;
};
type initType = {
	info: userType;
	isLogged: boolean;
};
const initialState: initType = {
	info: {
		firstName: "",
		lastName: "",
		email: "",
		token: "",
		id: -1,
	},
	isLogged: false,
};
export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserWhenLogged(state, action: PayloadAction<userType>) {
			state.info = action.payload;
			state.isLogged = true;
		},
	},
});
export const userAction = userSlice.actions;
export default userSlice.reducer;

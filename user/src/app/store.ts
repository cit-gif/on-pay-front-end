import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReduce from "../reducer/userReduce";
export const store = configureStore({
	reducer: {
		user: userReduce,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

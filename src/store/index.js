import { createSlice, configureStore } from "@reduxjs/toolkit";

const redux = require("redux");

const counterInitialState = { counter: 0, showCounter: true };
const authInitialState = { isAuthenticated: false };

const counterSlice = createSlice({
	name: "counter",
	initialState: counterInitialState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggle(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

const authSlice = createSlice({
	name: "authentication",
	initialState: authInitialState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		},
	},
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer,
	},
});

export default store;

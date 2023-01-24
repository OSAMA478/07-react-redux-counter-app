const redux = require("redux");

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
	switch (action.type) {
		case "increment":
			return {
				...state,
				counter: state.counter + 1,
			};
			break;
		case "decrement":
			return {
				...state,
				counter: state.counter - 1,
			};
			break;
		case "increase":
			return {
				...state,
				counter: state.counter + action.amount,
			};
			break;
		case "toggle":
			return {
				...state,
				showCounter: !state.showCounter,
			};
			break;
		default:
			return state;
	}
};

const store = redux.createStore(counterReducer);

export default store;

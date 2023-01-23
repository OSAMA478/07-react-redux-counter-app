const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
	switch (action.type) {
		case "increment":
			return {
				counter: state.counter + 1,
			};
			break;
		case "decrement":
			return {
				counter: state.counter - 1,
			};
			break;
		default:
			return state;
	}
};

const store = redux.createStore(counterReducer);

export default store;

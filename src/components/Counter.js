import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
	const counter = useSelector((state) => state.counter);
	const show = useSelector((state) => state.showCounter);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch({ type: "increment" });
	};

	const increaseHandler = () => {
		dispatch({ type: "increase", amount: 5 });
	};
	const decrementHandler = () => {
		dispatch({ type: "decrement" });
	};
	const toggleCounterHandler = () => {
		dispatch({ type: "toggle" });
	};
	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div className="flex justify-center gap-2 mb-2">
				<button onClick={decrementHandler}>Decrement</button>
				<button onClick={increaseHandler}>Increase by 5</button>
				<button onClick={incrementHandler}>Increment</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;

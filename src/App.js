import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counter/counterSlice";
function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const incrementValue = () => {
    dispatch(incrementByAmount(input));
  };
  return (
    <div>
      <span></span>
      <div>
        <h1>{count}</h1>
        <input
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        ></input>
        <button onClick={incrementValue}>incrementby amount</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>increment</button>
      </div>
    </div>
  );
}

export default App;

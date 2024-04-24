import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../Redux/Counter/counterSlice";

export default function Trial() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

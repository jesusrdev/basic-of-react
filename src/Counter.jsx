import { useState } from "react";
import useTitle from "./hooks/useTitle";


export default function Counter() {
  const [count, setCount] = useState(0);

  useTitle(`You clicked ${count} times`);

  return (
    <>
      <p>Counter = {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

import React from "react";
import { useSelector } from "react-redux";

const Counter: React.FC = () => {
  // const [count, setCount] = useState(0);
  const myState = useSelector((state) => state);
  console.log(myState);
  return (
    <div>
      <h2>hiiii Counter</h2>
      <p>{myState}</p>
      {/* <button onClick={() => setCount(count - 1)}>Decrease</button>
     
      <button onClick={() => setCount(count + 1)}>Increase</button> */}
    </div>
  );
};

export default Counter;

import { useState } from "react";
import Decrement from "./Decrement";
import Incremet from "./Incremet";


function App() {
  const [count, setCount] = useState(0);

  const countIncrement = () => {
   if(count < 15) setCount(count + 5)
  }

  const countDecrement = () => {
   if(count > 0) setCount(count - 5)
  }
  return (
    <div className="App">
      <h3>{count}</h3>
      <Decrement countDecrement={countDecrement}/>
      <Incremet countIncrement={countIncrement}/>
    </div>
  );
}

export default App;

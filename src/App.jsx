import { useEffect, useState } from "react";
import "./App.css";
import { Gridlayout } from "./components/Gridlayout";
import { randomInt } from "./utils/index.js";
function App() {
  const [grid, setGrid] = useState(0);
  const [num , setnum] = useState(null)
  function handleClick(id) {
    setGrid(id);
    console.log(id)
    console.log(num)
  }
  useEffect(()=>{
    const num = randomInt(0,99)
    setnum(num)
  },[])

  return (
    <>
      <h1>find the Secret Color!</h1>
      <div className="grid">
        {[...Array(100)].map((_, i) => (
          <Gridlayout key={i} id={i} click={handleClick} />
        ))}
      </div>
    </>
  );
}

export default App;

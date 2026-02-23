import { useEffect, useState } from "react";
import "./App.css";
import { Gridlayout } from "./components/Gridlayout";
import { randomInt } from "./utils/index.js";
function App() {
  const [secret, setSecret] = useState(null);
  const [found, setFound] = useState(false);
  const [clickedCells,setClickedCells]=useState([])
  function handleClick(id) {
    if (id === secret) {
      setFound(true);
    }
    else{
    setClickedCells(prev =>!prev.includes(id)?[...prev ,id]:prev)
    }
    console.log(clickedCells);
    console.log(id);
    console.log(secret);
  }
  useEffect(() => {
    const num = randomInt(0, 99);
    setSecret(num);
  }, []);

  return (
    <>
      <h1 className="h1">find the Secret Color! <div> </div></h1>
      <div className="grid">
        {[...Array(100)].map((_, i) => (
          <Gridlayout key={i} id={i} click={handleClick} isClicked={clickedCells.includes(i)} isgrid={found?secret === i:_} num={secret} />
        ))}
      </div>
      {found && <h1>number is found</h1>}
    </>
  );
}

export default App;

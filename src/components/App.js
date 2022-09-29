import React, { useEffect, useState, useRef } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
 const [start, setStart] = useState(0);
 const [end, setEnd] = useState(4);
 const [sushis, setSushis] = useState([])
 const [wallet, setWallet] = useState(100)
 const emptyPlates = useRef(0)

 const eatSushi = (sushi) => {
  emptyPlates.current += 1
  setWallet(wallet - sushi.price)
}


//ADD FOUR MORE MEALS
  const handleClick = () => {
    setStart(start + 4) 
    setEnd(end + 4)
  };

  //FETCHING ALL THE SUSHI FROM THE API
  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushis(data))
  }, [])
 
  return (
    <div className="app">
      <SushiContainer wallet= {wallet} emptyPlates={eatSushi} handleClick={handleClick} sushis={sushis.slice(start, end)} setSushis= {setSushis} />
      <Table wallet={wallet} setWallet={setWallet} emptyPlates={emptyPlates} sushis={sushis}/>
    </div>
  );
}

export default App;

import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, handleClick, emptyPlates, wallet}) {
  return (
    <div className="belt">
      {sushis.map((item) => {
       return < Sushi wallet= {wallet} emptyPlates={emptyPlates} key={item.id} oneSushi={item} sushis={sushis}/>
      })}
      <MoreButton handleClick={handleClick} sushis={sushis} />
    </div>
  );
}

export default SushiContainer;

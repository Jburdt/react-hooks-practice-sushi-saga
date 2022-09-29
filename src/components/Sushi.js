import React, { useState } from "react";

function Sushi({oneSushi, emptyPlates, wallet}) {

  const [hidden, setHidden] = useState(false)
  if(wallet < oneSushi.price ){
    document.getElementsByClassName("sushi")[0].style.display = "none"
  }
  

  return (
    <div className="sushi">
      <div className="plate" onClick={() => {
        emptyPlates(oneSushi)
        setHidden(true)
       
      }}>
        {/* Tell me if this sushi has been eaten! */}
        {hidden ? null : (
          <img
            src={oneSushi.img_url}
            alt={"Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {oneSushi.name} - ${oneSushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
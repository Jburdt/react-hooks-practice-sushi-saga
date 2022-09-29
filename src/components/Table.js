import React from "react";

function Table({emptyPlates, wallet, sushis}) {
  // renders an empty plate for every element in the array
  const plates = new Array(emptyPlates.current).fill(0)
  const renderPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">{renderPlates}</div>
      </div>
    </>
  );
}

export default Table;


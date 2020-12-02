import React from "react";

function Sum(props) {
  const grandTotal = props.finalItems.reduce(
    (totalValue, itemValue) => totalValue + itemValue.qty * itemValue.price,
    0
  );
  // () instead of {} in the arrow function means implicit return
  return (
    <div className="sum">
      <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
    </div>
  );
}

export default Sum;

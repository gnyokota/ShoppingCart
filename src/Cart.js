import React, { useState } from "react";
import CartItem from "./CartItem";
import Sum from "./Sum";

function Cart(props) {
  const [items, setItems] = useState(props.initialItems);

  const updateQty = (id, newQty) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  };

  const deleteItem = (id) => {
    const remainItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(remainItems);
  };

  return (
    <div className="cart">
      <h1>
        <i className="fas fa-shopping-cart"></i>
      </h1>
      <h1 className="cartTitle">Shopping Cart</h1>
      {items.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            qty={item.qty}
            updateQty={updateQty}
            deleteItem={deleteItem}
            // I can also destructur item as props: {...item}
          />
        );
      })}
      <Sum finalItems={items} />
    </div>
  );
}

export default Cart;

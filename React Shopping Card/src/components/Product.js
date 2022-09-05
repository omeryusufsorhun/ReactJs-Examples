import React from "react";

function Product({ product, basket, setBasket }) {
  const basketItem = basket.find((item) => item.id === product.id);
  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    //daha önce eklendiyse
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    currentBasket.amount--;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, checkBasket]);
    }
  };
  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    //daha önce eklendiyse
    if (checkBasket) {
      checkBasket.amount++;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };
  return (
    <div>
      <h1>{product.name} </h1>
      <h3>{product.price}</h3>
      <button onClick={removeBasket}>sat</button>
      <span className="amount">{(basketItem && basketItem.amount) || 0}</span>
      <button onClick={addBasket}>al</button>
    </div>
  );
}

export default Product;

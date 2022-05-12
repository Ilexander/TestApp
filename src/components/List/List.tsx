import React from "react";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import { changeStatus } from "../../reducer/modalSlice";
import { getCurrentProduct } from "../../reducer/productSlice";
import { Item } from "./Item";

function List() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);

  function addToBasket(payload: string) {
    dispatch(getCurrentProduct(payload));
    dispatch(changeStatus("open"));
  }

  return (
    <ul className="products__list">
      {products.map((item: any, idx: number) => (
        <Item
          key={idx}
          name={item.name}
          price={item.price}
          category={item.category}
          onClick={() => addToBasket(item.name)}
        ></Item>
      ))}
    </ul>
  );
}

export { List };

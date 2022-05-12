import React from "react";
import { useAppDispatch } from "../../reducer/hooks";
import { changeStatus } from "../../reducer/modalSlice";
import { getMinPrice } from "../../reducer/productSlice";

function Cheapest() {
  const dispatch = useAppDispatch();

  function openModal() {
    dispatch(changeStatus("open"));
    dispatch(getMinPrice());
  }

  return (
    <button className="products__cheapest" onClick={() => openModal()}>
      Buy cheapest
    </button>
  );
}

export { Cheapest };

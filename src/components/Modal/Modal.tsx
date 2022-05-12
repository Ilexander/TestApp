import React from "react";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import { changeStatus } from "../../reducer/modalSlice";
import { Form } from "./Form";
import "./style.css";

function Modal() {
  const dispatch = useAppDispatch();

  const currentProduct = useAppSelector(
    (state) => state.product.currentProduct
  );

  const modal = useAppSelector((state) => state.modal.modalStatus);

  return (
    <div
      className="modal"
      style={{ display: modal === "open" ? "block" : "none" }}
    >
      <button
        className="modal__close"
        onClick={() => dispatch(changeStatus("close"))}
      ></button>
      <p className="modal__category products__category">
        {currentProduct[0]?.category}
      </p>
      <h3 className="modal__name products__name">{currentProduct[0]?.name}</h3>
      <p className="modal__price products__price">
        <span>$</span>
        {currentProduct[0]?.price}
      </p>
      <Form></Form>
    </div>
  );
}

export { Modal };

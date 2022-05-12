import React from "react";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import { changeStatus } from "../../reducer/modalSlice";

function Blackout() {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal.modalStatus);
  return (
    <div
      onClick={() => dispatch(changeStatus("close"))}
      className={modal === "open" ? "blackout blackout--active" : "blackout"}
    ></div>
  );
}

export {Blackout}

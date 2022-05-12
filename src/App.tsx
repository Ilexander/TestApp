import React, { useEffect } from "react";
import { Cheapest } from "./components/List/Cheapest";
import { List } from "./components/List/List";
import { Blackout } from "./components/Modal/Blackout";
import { Modal } from "./components/Modal/Modal";
import { useAppDispatch } from "./reducer/hooks";
import { fetchProducts } from "./reducer/productSlice";
import "./style.css";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Blackout></Blackout>
      <List></List>
      <Cheapest></Cheapest>
      <Modal></Modal>
    </div>
  );
}

export { App };

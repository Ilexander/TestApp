import React from "react";
import "./style.css";

interface IItemProps {
  name: string;
  price: number;
  category: string;
  onClick: () => void;
}

const Item: React.FC<IItemProps> = ({ name, price, category, onClick }) => {
  return (
    <li className="products__item">
      <p className="products__category">{category}</p>
      <h3 className="products__name">{name}</h3>
      <p className="products__price">
        <span>$</span> {price}
      </p>
      <button className="products__btn" onClick={onClick}>Buy</button>
    </li>
  );
};

export { Item };

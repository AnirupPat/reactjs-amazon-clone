import React from "react";
import classes from "./Product.module.css";

const product = ({ id, title, price, rating, image }) => {
  return (
    <div className={classes.product}>
      <div className={classes.product__info}>
        <p className={classes.product__price}>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.product__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <img alt="" src={image} />
        <button>Add to Basket</button>
      </div>
    </div>
  );
};

export default product;

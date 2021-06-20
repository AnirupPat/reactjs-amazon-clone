import React from "react";
import classes from "./Product.module.css";

const product = () => {
  return (
    <div className={classes.product}>
      <div className={classes.product__info}>
        <p className={classes.product__price}>The Lean Startup</p>
        <p>
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className={classes.product__rating}>
          <p>🌟 </p>
        </div>
        <img
          alt=""
          src="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
        />
        <button>Add to Basket</button>
      </div>
    </div>
  );
};

export default product;

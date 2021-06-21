import React from "react";
import classes from "./Checkout.module.css";

const Checkout = () => {
  return (
    <div className={classes.checkout}>
      <div className={classes.checkout__left}>
        <img
          className={classes.checkout__ad}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className={classes.checkout__title}>Your Shopping Basket</h2>
        </div>
      </div>
      <div className={classes.checkout__right}>
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
};

export default Checkout;

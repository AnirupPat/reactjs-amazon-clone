import React from "react";
import classes from "./Subtotal.module.css";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className={classes.subtotal__gift}>
              <input type="checkbox" />
              This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className={classes.subtotal__button}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;

import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => {
  return (
    <div className={classes.header}>
      <img
        className={classes.header__logo}
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className={classes.header__search}>
        <input className={classes.header__searchInput} type="text" />
        <SearchIcon className={classes.header__searchIcon} />
      </div>

      <div className={classes.header__nav}>
        <div className={classes.header__options}>
          <span className={classes.header__optionsLineOne}>Hello Guest</span>
          <span className={classes.header__optionsLineTwo}>Sign In</span>
        </div>

        <div className={classes.header__options}>
          <span className={classes.header__optionsLineOne}>Returns</span>
          <span className={classes.header__optionsLineTwo}>& Orders</span>
        </div>

        <div className={classes.header__options}>
          <span className={classes.header__optionsLineOne}>Your</span>
          <span className={classes.header__optionsLineTwo}>Prime</span>
        </div>

        <div className={classes.header__optionBasket}>
          <ShoppingBasketIcon />
          <span
            className={`${classes.header__optionsLineTwo} ${classes.header__basketCount}`}
          >
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;

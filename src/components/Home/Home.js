import React from "react";
import classes from "./Home.module.css";
import Product from "../HomeCards/Product/Product";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.home__container}>
        <img
          alt=""
          className={classes.home__image}
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroMarch21/Range_D-1x._CB669480912_.jpg"
        />
      </div>

      <div className={classes.home__card__section}>
        <div className={classes.home__row}>
          <Product
            id="10001"
            title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, 8GB RAM, 256GB SSD, 1.4GHz Quad-core 8th-Generation Intel Core i5 Processor, Two Thunderbolt 3 Ports) - Space Grey"
            price="19.99"
            rating={5}
            image="https://m.media-amazon.com/images/I/71YRSVXhgQL._AC_UY218_.jpg"
          />
          <Product
            id="10002"
            title="New Apple Watch Series 6 (GPS + Cellular, 40mm) - Blue Aluminium Case with Deep Navy Sport Band"
            price="19.99"
            rating={5}
            image="https://m.media-amazon.com/images/I/718qilkBKUL._AC_UY218_.jpg"
          />
        </div>

        <div className={classes.home__row}>
          <Product
            id="10003"
            title="New Apple iPhone 12 Pro (128GB) - Graphite"
            price="19.99"
            rating={5}
            image="https://m.media-amazon.com/images/I/71YlH-4MUQL._AC_UY218_.jpg"
          />
          <Product
            id="10004"
            title="CELLBELL® GC01 Transformer Series Gaming/Racing Style Ergonomic High Back Chair with Removable Neck Rest and Adjustable Back Cushion [Red-Black]"
            price="19.99"
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61y%2BFF1poiL._SX679_.jpg"
          />
          <Product
            id="10005"
            title="Apple AirPods with Charging Case"
            price="19.99"
            rating={5}
            image="https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UY218_.jpg"
          />
        </div>

        <div className={classes.home__row}>
          <Product
            id="10006"
            title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Certified Android LED TV 55X7500H (Black) (2020 Model)"
            price="19.99"
            rating={5}
            image="https://m.media-amazon.com/images/I/91QD0vRZdVL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

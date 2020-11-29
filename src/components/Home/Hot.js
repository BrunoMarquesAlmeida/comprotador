import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Link } from "react-router-dom";

const Hot = () => {
  return (
    <div id="hot">
      <div className="box py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-0">Novidades</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={8000}
          infinite={true}
        >
          {product(
            "1_332_17.jpg",
            "Suporte p/ Headset Ozone Portal RGB Hub",
            "27,90€",
            "39,90€",
            true,
            true
          )}
          {product(
            "1_335_2.jpg",
            "Subwoofer Edifier T5 70W Preto",
            "129,90€",
            "",
            true,
            false
          )}
          {product(
            "1_337_1.jpg",
            "Mini PC GMK NucBox",
            "289,90€",
            "",
            true,
            false
          )}
          {product(
            "1_339_8.jpg",
            "Portátil Asus Zenbook 14",
            "999.90",
            "",
            true,
            false
          )}
          {product(
            "1_p030470_2.jpg",
            "SD M.2 2280 Gigabyte Aorus Gen4 1TB",
            "187,90€",
            "",
            true,
            false
          )}
          {product(
            "1085_1.jpg",
            "Teclado Mecânico Asus Sagaris",
            "54,90€",
            "149,90€",
            true,
            true
          )}
          {product(
            "MSI156.jpg",
            `Portátil MSI 15.6" GF63 Thin`,
            "949,90€",
            "1199,90€",
            true,
            true
          )}
        </Carousel>
      </div>
    </div>
  );
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const product = (imgURL, detail, price, delPrice, newRibbon, saleRibbon) => {
  return (
    <div
      className="product"
      style={{
        margin: "0 25px",
      }}
    >
      <Link to="/">
        <img
          src={`comprotador/assets/img/produtos/${imgURL}`}
          alt=""
          className="img-fluid"
        />
      </Link>
      <div className="text">
        <h3>
          <Link to="/">{detail}</Link>
        </h3>
        <p className="price">
          <del>{delPrice}</del>
          <> </>
          {price}
        </p>
      </div>

      <div className="ribbon sale">
        <div
          className="theribbon"
          style={saleRibbon === true ? {} : { display: "none" }}
        >
          SALE
        </div>
        <div className="ribbon-background"></div>
      </div>
      <div className="ribbon new">
        <div
          className="theribbon"
          style={newRibbon === true ? {} : { display: "none" }}
        >
          NEW
        </div>
        <div className="ribbon-background"></div>
      </div>
    </div>
  );
};

export default Hot;

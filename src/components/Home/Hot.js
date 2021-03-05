import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Spinner } from "react-bootstrap";

import { fetchAllProducts } from "../../actions";
import { db } from "../../produtos";

import formatPrice from "../Common/formatPrice";

class Hot extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  renderProducts() {
    // sorts products by highest sales number
    const sortedProducts = this.props.products.sort((a, b) => {
      if (a.vendas < b.vendas) {
        return 1;
      }
      if (a.vendas > b.vendas) {
        return -1;
      }
      return 0;
    });

    // then slices only the 15 most selling products
    const hotProducts = sortedProducts.slice(0, 15);

    // maps those 15 products onto JSX
    return hotProducts.map(({ img, title, _id, ribbons, precos }) => {
      return (
        <div
          className="product same-height"
          style={{
            margin: "0 25px",
          }}
          key={_id}
        >
          <Link to={`/detalhes/${_id}`}>
            <img src={img[0].original} alt="" className="img-fluid" />
          </Link>
          <div className="text">
            <h3>
              <Link to={`/detalhes/${_id}`}>{title}</Link>
            </h3>
            <p className="price">
              <del>{precos.desconto ? formatPrice(precos.normal) : null}</del>
              <> </>
              {precos.desconto
                ? formatPrice(precos.desconto)
                : formatPrice(precos.normal)}
            </p>
          </div>
          <div className="ribbon sale">
            <div
              className="theribbon"
              style={ribbons.saldos ? {} : { display: "none" }}
            >
              SALDOS
            </div>
            <div className="ribbon-background"></div>
          </div>
          <div className="ribbon new">
            <div
              className="theribbon"
              style={ribbons.novo ? {} : { display: "none" }}
            >
              NOVO
            </div>
            <div className="ribbon-background"></div>
          </div>
        </div>
      );
    });
  }

  render() {
    if (
      this.props.fetchComplete !== undefined &&
      this.props.fetchComplete !== null
    ) {
      return (
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={8000}
          infinite={true}
        >
          {this.renderProducts()}
        </Carousel>
      );
    } else {
      return (
        <div className="row h-100">
          <div className="col-sm-12 my-auto">
            <div className="mx-auto" style={{ width: "2rem" }}>
              <Spinner animation="border" role="status" variant="info">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          </div>
        </div>
      );
    }
  }
}

const responsive = {
  superLargeDesktop: {
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

const mapStateToProps = (state) => {
  const allProducts = Object.values(state.products);

  return {
    products: allProducts.filter((produto) => {
      // filter out fetchComplete from product list
      const isNotFetchComplete =
        typeof produto === "object" && produto !== null;
      return isNotFetchComplete;
    }),
    fetchComplete: state.products.fetchComplete,
  };
};

export default connect(mapStateToProps, { fetchAllProducts })(Hot);

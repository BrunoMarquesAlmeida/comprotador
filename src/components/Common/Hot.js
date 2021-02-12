import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { fetchAllProducts } from "../../actions";
import { db } from "../../produtos";

class Hot extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  renderProducts() {
    const sortedProducts = this.props.productsByCat.sort((a, b) => {
      if (a.vendas < b.vendas) {
        return 1;
      }
      if (a.vendas > b.vendas) {
        return -1;
      }
      return 0;
    });

    const hotProducts = sortedProducts.slice(0, 15);
    console.log(this.props.productsByCat);

    return hotProducts.map(({ img, title, id, ribbons, precos }) => {
      return (
        <div
          className="product same-height"
          style={{
            margin: "0 25px",
          }}
          key={id}
        >
          <Link to={`/detalhes/${id}`}>
            <img
              src={`assets/img/produtos/${img}`}
              alt=""
              className="img-fluid"
            />
          </Link>
          <div className="text">
            <h3>
              <Link to={`/detalhes/${id}`}>{title}</Link>
            </h3>
            <p className="price">
              <del>{precos.desconto ? precos.normal : null}</del>
              <> </>
              {precos.desconto ? precos.desconto : precos.normal}
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
    productsByCat: allProducts.filter((produto) => {
      const isNotFetchComplete =
        typeof produto === "object" && produto !== null;
      return isNotFetchComplete;
    }),
    fetchComplete: state.products.fetchComplete,
  };
};

export default connect(mapStateToProps, { fetchAllProducts })(Hot);

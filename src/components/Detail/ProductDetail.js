import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import { Spinner } from "react-bootstrap";

import { NewRibbon } from "../Common/Ribbon";
import { AddCartIcon } from "../Common/AddCartIcon";
import Recomendados from "../Common/Recomendados";

const ProductDetail = (props) => {
  if (props.fetchComplete !== undefined && props.fetchComplete !== null) {
    const { product } = props;
    const images = product.img;
    const { novo, saldos } = product.ribbons;

    return (
      <div className="col-lg-9 order-1 order-lg-2">
        <div id="productMain" className="row">
          <div className="col-md-6">
            <div>
              <ReactImageGallery
                items={images}
                thumbnailPosition="right"
                showPlayButton={false}
                infinite={false}
                showNav={false}
              />
            </div>
            {saldos ? <NewRibbon tipo="saldos" /> : null}
            {novo ? <NewRibbon tipo="novo" /> : null}
          </div>
          <div className="col-md-6">
            <div className="box">
              <h1 className="text-center">{product.title}</h1>

              <p className="price">
                <del>
                  {" "}
                  {product.precos.desconto ? product.precos.normal : ""}
                </del>{" "}
                {product.precos.desconto
                  ? product.precos.desconto
                  : product.precos.normal}
              </p>
              <p className="text-center buttons">
                <AddCartIcon />
                <span className="btn btn-outline-primary">
                  Adicionar à wishlist
                  <i className="fa fa-heart fa-icon"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div id="details" className="box">
          <p></p>
          {renderDescription(product.description)}
          <br />
          <h4>Especificações técnicas:</h4>
          <ul>{renderSpecs(product.specs)}</ul>
          <hr />
          <div className="social">
            <h4>Partilhar</h4>
            <p>
              <a href="#" className="external facebook">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="external gplus">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#" className="external twitter">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="email">
                <i className="fa fa-envelope"></i>
              </a>
            </p>
          </div>
        </div>
        {Recomendados}
      </div>
    );
  } else {
    return (
      <div className="col-lg-9 order-1 order-lg-2">
        <div className="row h-100">
          <div className="col-sm-12 my-auto">
            <div className="mx-auto" style={{ width: "2rem" }}>
              <Spinner animation="border" role="status" variant="info">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const renderSpecs = function (specs) {
  return specs.map(({ title, content }) => {
    const moreThan1Spec = content.length > 1;
    if (moreThan1Spec) {
      return (
        <li key={title}>
          <b>{title}</b>:
          <ul>
            {content.map((c) => {
              return <li key={c}>{c}</li>;
            })}
          </ul>
        </li>
      );
    } else {
      return (
        <li key={title}>
          <b>{title}</b>: {content}
        </li>
      );
    }
  });
};

const renderDescription = function (description) {
  let key = 0;
  return description.map(function ({ sectionTitle, content }) {
    key++;
    return (
      <div key={key}>
        <h4 className="mb-0">{sectionTitle}</h4>
        <p style={{ textAlign: "justify" }}>{content}</p>
      </div>
    );
  });
};

export default ProductDetail;

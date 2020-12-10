import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";

import { NewRibbon } from "../Common/Ribbon";
import { AddCartIcon } from "../Common/AddCartIcon";

const ProductDetail = () => {
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
          <NewRibbon tipo="saldos" />
          <NewRibbon tipo="novo" />
        </div>
        <div className="col-md-6">
          <div className="box">
            <h1 className="text-center">Mini PC GMK NucBox</h1>

            <p className="price">
              <del> 289,90€</del> 229,90€
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
        <h4>O mini PC 4K que cabe na palma de sua mão</h4>
        <p>
          O Nucbox é um PC ultra pequeno, mas com uma grande performance. O seu
          design é a pensar na sua produtividade móvel e no entretenimento 4K.
        </p>
        <h4>Menos é mais</h4>
        <p>
          O seu design metálico texturizado dá-lhe um toque robusto e luxuoso. O
          NucBox é ultra compacto, leve e portátil, de transporte tão simples
          como guardá-lo na sua mala própria e colocá-lo no bolso do seu casaco.
        </p>

        <h4>Especificações técnicas:</h4>
        <ul>
          <li>
            <b>Sistema Operativo</b>: Windows 10 Home, 64 Bits
          </li>
          <li>
            <b>Processador</b>: Intel® Celeron® J4125 Quad-Core, 2.00 GHz com
            Turbo até 2.70 GHz, 8 MB Cache
          </li>
          <li>
            <b>Gráficos</b>: Intel® UHD Graphics 600
          </li>
          <li>
            <b>Interface</b>:
            <ul>
              <li>2 x USB-A</li>
              <li>1 x USB-C (Entrada DC apenas)</li>
              <li>1 x HDMI</li>
              <li>1 x 3.5mm Headphone Jack</li>
              <li>1 x Micro SD Slot</li>
            </ul>
          </li>
          <li>
            <b>Comunicações</b>: Wireless AC 867 MB/s 2x2 + Bluetooth 4.2
          </li>
          <li>
            <b>Alimentação</b>: Adaptador AC
          </li>
          <li>
            <b>Dimensões do produto</b>: 62 x 62 x 42mm
          </li>
          <li>
            <b>Peso do produto </b>: 125g
          </li>
        </ul>

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
      <div className="row same-height-row">
        <div className="col-md-3 col-sm-6" style={{ display: "grid" }}>
          <div className="box same-height">
            <h3>Produtos recomendados</h3>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="product same-height">
            <a href="detail.html">
              <img
                src="assets/img/produtos/1085_1.jpg"
                alt=""
                className="img-fluid"
              />
            </a>

            <div className="text">
              <h3>Teclado Mecânico Asus Sagaris</h3>
              <p className="price">54,90€</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="product same-height">
            <a href="detail.html">
              <img
                src="assets/img/produtos/1_p030470_2.jpg"
                alt=""
                className="img-fluid"
              />
            </a>

            <div className="text">
              <h3>SD M.2 2280 Gigabyte Aorus Gen4 1TB</h3>
              <p className="price">187,90€</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="product same-height">
            <a href="detail.html">
              <img
                src="assets/img/produtos/1_335_2.jpg"
                alt=""
                className="img-fluid"
              />
            </a>

            <div className="text">
              <h3>Subwoofer Edifier T5 70W Preto</h3>
              <p className="price">129,90€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const images = [
  {
    original: "assets/img/produtos/1_337_1.jpg",
    thumbnail: "assets/img/produtos/1_337_1.jpg",
  },
  {
    original: "assets/img/produtos/2_270_1.jpg",
    thumbnail: "assets/img/produtos/2_270_1.jpg",
  },
  {
    original: "assets/img/produtos/6_128_1.jpg",
    thumbnail: "assets/img/produtos/6_128_1.jpg",
  },
  {
    original: "assets/img/produtos/10_32_1.jpg",
    thumbnail: "assets/img/produtos/10_32_1.jpg",
  },
  {
    original: "assets/img/produtos/8_65_1.jpg",
    thumbnail: "assets/img/produtos/8_65_1.jpg",
  },
];
export default ProductDetail;

import BreadCrumb from "./BreadCrumb";
import ProductDetail from "./ProductDetail";
import NavMenu from "./NavMenu";

const Detail = () => {
  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <BreadCrumb />
          <NavMenu />

          <ProductDetail />
        </div>
        <div style={{ marginBottom: "30px" }} />
      </div>
    </div>
  );
};

export default Detail;

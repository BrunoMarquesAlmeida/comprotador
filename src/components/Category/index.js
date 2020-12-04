import BreadCrumb from "./BreadCrumb";
import MenuFilters from "./MenuFilters";
import ProductList from "./ProductList";

const Category = (props) => {
  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <BreadCrumb categorias={props.match.params} />
          <MenuFilters />
          <ProductList categorias={props.match.params} />
        </div>
      </div>
    </div>
  );
};

export default Category;

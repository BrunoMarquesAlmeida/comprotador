import BreadCrumb from "./BreadCrumb";
import MenuFilters from "./MenuFilters";

const Category = (props) => {
  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <BreadCrumb categorias={props.match.params} />
          <MenuFilters />
        </div>
      </div>
    </div>
  );
};

export default Category;

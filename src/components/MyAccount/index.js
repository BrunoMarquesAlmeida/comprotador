import Breadcrumb from "../Common/Breadcrumb";
import BreadCrumb from "../Category/BreadCrumb";

const MyAccount = (props) => {
  return (
    <div id="content">
      <div className="container">
        <div className="row">
          <Breadcrumb props={props} />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;

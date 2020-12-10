import ImgSlider from "./ImgSlider";
import Advantages from "./Advantages";
import Hot from "../Common/Hot";

const Home = () => {
  return (
    <div id="content">
      <ImgSlider />
      <Advantages />
      <div id="hot">
        <div className="box py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="mb-0">Destaques</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Hot />
        </div>
      </div>

      <div style={{ marginBottom: "30px" }} />
    </div>
  );
};

export default Home;

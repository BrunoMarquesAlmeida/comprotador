import ImgSlider from "./ImgSlider";
import Advantages from "./Advantages";
import Hot from "./Hot";

const Home = () => {
  return (
    <div id="content">
      <ImgSlider />
      <Advantages />
      <Hot />
      <div style={{ marginBottom: "30px" }} />
    </div>
  );
};

export default Home;

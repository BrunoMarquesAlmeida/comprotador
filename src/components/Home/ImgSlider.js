import { Carousel } from "react-bootstrap";

const ImgSlider = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div
            id="main-slider"
            style={{
              maxWidth: "1140px",
              margin: "auto auto 30px auto",
            }}
          >
            <Carousel height="200px">
              <Carousel.Item>
                <img
                  src="assets/img/main-slider/artiom-vallat-H-qqp_Eqaww-unsplash.jpg"
                  alt=""
                  className="img-fluid"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="assets/img/main-slider/christian-wiediger-WkfDrhxDMC8-unsplash.jpg"
                  alt=""
                  className="img-fluid"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="assets/img/main-slider/fredrick-tendong-HVYepJYeHdQ-unsplash.jpg"
                  alt=""
                  className="img-fluid"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="assets/img/main-slider/jakob-owens-Eznp0kLNkkI-unsplash.jpg"
                  alt=""
                  className="img-fluid"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;

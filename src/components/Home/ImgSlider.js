import { Carousel } from "react-bootstrap";

const ImgSlider = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div
            id="main-slider"
            //  style={{display: "inline-block"}}
          >
            <Carousel>
              <Carousel.Item>
                <img
                  src="assets/img/main-slider1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="assets/img/main-slider2.jpg"
                  alt=""
                  className="img-fluid"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="assets/img/main-slider3.jpg"
                  alt=""
                  className="img-fluid"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="assets/img/main-slider4.jpg"
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

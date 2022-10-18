import React from "react";
import banner1 from "../../assets/image/banner1.png"
import banner2 from "../../assets/image/banner2.png"
import banner3 from "../../assets/image/banner3.png"
import Carousel from 'react-bootstrap/Carousel';

export default function Carrusel(props) {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"https://http2.mlstatic.com/D_NQ_679722-MLA51883728628_102022-OO.webp"}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-90"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
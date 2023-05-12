import Carousel from 'react-bootstrap/Carousel';
import img1 from "./images/bbq.jpg"
import img2 from "./images/briyani.jpg"
import img3 from "./images/karhai.jpg"
import "./cover.css"

let Cover =()=> {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
         
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>BBQ</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Briyani</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>kharhai</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Cover
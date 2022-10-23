import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/aos/dist/aos.css';
import '../node_modules/aos/dist/aos';
import AOS from 'aos';
import Card from 'react-bootstrap/Card';
import photo from './assets/img/piero3.jpg';
import photo1 from './assets/img/ergo.jpg';
import photo2 from './assets/img/ergo2.jpg';
import photo3 from './assets/img/ergo3.jpg';
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1
  };

  return (

      <Container className='main-ports' id="portfolios">
        <Row className='justify-content-center'>
            <Col className='col-lg-4 col-md-6 col-10'>
                <Card className='port-card border-0 shadow mt-5' data-aos="zoom-in">
                  <div className='share btn'>
                    <i class="bi bi-share-fill"></i>
                  </div>
                     <div className="photo">
                      <Slider {...settings}>
                        <Card.Img className='images' variant="top" src={photo} />
                        <Card.Img className='images' variant="top" src={photo1} />
                        <Card.Img className='images' variant="top" src={photo2} />
                        <Card.Img className='images' variant="top" src={photo3} />
                      </Slider>
                    </div>
                    <Card.Body className='card-body'>
                        <Card.Title><a href='' className='card-title'>New Piero Ergo - Black Gum</a> </Card.Title>
                        <Card.Text className='card-text'>
                          <p className='price'>Rp. 250.000 </p>
                          <p className='sold'><i class="bi bi-bag-check-fill"></i> 4 sold </p>
                          <p className='rev'><i class="bi bi-star-half"></i> 5 reviews </p>
                          <p className='loc'><i class="bi bi-geo-alt-fill"></i> Lamongan, Jawa Timur </p>
                        </Card.Text>
                        <div className='btn-bott text-end mt-4 '>
                          <div className='btn pb-2 btn-love shadow me-2'>Favorite &nbsp;<i class="bi bi-heart-fill"></i></div>
                          <div className='btn pb-2 btn-cart shadow'>Add to cart &nbsp;<i class="bi bi-cart-plus-fill"></i></div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
  );
}

export default App;

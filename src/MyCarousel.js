import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const MyCarousel = () => {
    return ( 
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
     );
}
 
export default MyCarousel;
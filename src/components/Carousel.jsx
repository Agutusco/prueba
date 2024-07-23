import React, { useState, useEffect } from 'react';
import img1 from "../assets/i4.jpg"
import img2 from "../assets/i2.jpg" 
import img3 from "../assets/4.jpg"
import img4 from "../assets/i3.jpg"
import img5 from "../assets/5.jpg"

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [img1, img2, img3, img4, img5];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % images.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="carousel-container">
            <div className="carousel-inner">
                {images.map((img, index) => (
                    <img 
                        key={index}
                        src={img} 
                        alt={`Image ${index + 1}`}
                        className={index === currentImageIndex ? 'active' : ''}
                        style={{
                            opacity: index === currentImageIndex ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out'
                        }}
                    />
                ))}
            </div>
            <button className="btn-carousel">
                <a href="https://www.argenprop.com/lombardi-y-asociados" target="_blank" rel="noopener noreferrer">
                    Busca tu propiedad
                </a>
            </button>
        </div>
    );
};

export default Carousel;
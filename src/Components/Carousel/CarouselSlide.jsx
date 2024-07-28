import React, { useState, useEffect } from 'react';
import { Carousel, Typography } from "@material-tailwind/react";
import useBrandsHocks from './../../Hocks/useBrandsHocks';

const CarouselSlide = () => {
    const brands = useBrandsHocks([]);
    const [currentIndex, setCurrentIndex] = useState(0); 

    useEffect(() => {
        if (brands.length === 0) return; 

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
        }, 3000);
        return () => clearInterval(interval); 
    }, [brands.length]);


    const handleSlideChange = (index) => {
        setCurrentIndex(index);
    };

    return (
        <Carousel
            activeIndex={currentIndex} 
            className="rounded-xl"
            onChange={handleSlideChange} 
        >
            {brands.slice(0,3).map((brand) => (
                <div key={brand._id} className="relative h-full w-full">
                    <img
                        src={brand.brand_image}
                        className="h-full w-full object-cover"
                        alt={brand.brand_name} 
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 md:w-2/4 text-center">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                {brand.brand_name}
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                {brand.brand_details}
                            </Typography>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselSlide;

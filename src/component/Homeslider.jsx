import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import Skeleton Loader from MUI
import Skeleton from '@mui/material/Skeleton';

const images = [
    "https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg",
    "https://api.spicezgold.com/download/file_1734524893797_NewProject(13).jpg",
    "https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg",
    "https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg",
    "https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg"
];

const Homeslider = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating image load delay
        const imgLoadPromises = images.map((src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
            });
        });

        Promise.all(imgLoadPromises).then(() => setLoading(false));
    }, []);

    return (
        <div className="py-5">
            {loading ? (
                // Skeleton Loader (Shows while images are loading)
                <div className="flex justify-center">
                    <Skeleton variant="rectangular" width="100%" height={400} />
                </div>
            ) : (
                // Swiper Component (Shows when images are loaded)
                <Swiper
                    loop={true}
                    navigation={true}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    // mousewheel={true}
                    keyboard={true}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    centeredSlides={true}
                    modules={[Navigation, Pagination, Autoplay,Keyboard]}
                    className="mySwiper"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img src={src} className="w-full" alt={`Slide ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default Homeslider;

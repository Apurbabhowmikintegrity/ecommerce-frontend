import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom';
import { Navigation } from 'swiper/modules'; // Import Navigation module
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/homeslider.css'
const Homecatslider=()=>{
    return (
    <div className="homeCatSlider">
        <div className="container">
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        navigation={true} // Enable navigation
        modules={[Navigation]} // Use Navigation module
        className="mySwiper"
      >
        <SwiperSlide>
            <Link to="/">
          <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg" className="w-[60px] transition-all"/>
            <h3 className="font-[500] mt-3 text-[15px]">Smart table</h3>
            <p>5 items</p>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/">
          <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/12-cz_categoryimagelist.jpg" className="w-[60px]"/>
            <h3 className="font-[500] mt-3 text-[15px]">Crepe T-Shirt</h3>
            <p>5 items</p>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/">
          <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/13-cz_categoryimagelist.jpg" className="w-[60px]"/>
            <h3 className="font-[500] mt-3 text-[15px]">leather watch</h3>
            <p>5 items</p>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/">
          <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/14-cz_categoryimagelist.jpg" className="w-[60px]"/>
            <h3 className="font-[500] mt-3 text-[15px]">Rolling Diamond</h3>
            <p>5 items</p>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/">
          <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/15-cz_categoryimagelist.jpg" className="w-[60px]"/>
            <h3 className="font-[500] mt-3 text-[15px]">Wooden Chair</h3>
            <p>5 items</p>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/">
          <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/16-cz_categoryimagelist.jpg" className="w-[60px]"/>
            <h3 className="font-[500] mt-3 text-[15px]">Sneakers Shoes</h3>
            <p>5 items</p>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/">
          <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/17-cz_categoryimagelist.jpg" className="w-[60px]"/>
            <h3 className="font-[500] mt-3 text-[15px]">Purse</h3>
            <p>5 items</p>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/">
          <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/18-cz_categoryimagelist.jpg" className="w-[60px]"/>
            <h3 className="font-[500] mt-3 text-[15px]">Xbox Controller</h3>
            <p>5 items</p>
          </div>
          </Link>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg"/>
            <h3>Smart table</h3>
          </div>
        </SwiperSlide> */}
    
      </Swiper>
    </div>
   </div>
    )
}
export default Homecatslider;
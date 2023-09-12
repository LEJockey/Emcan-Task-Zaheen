import React  from 'react';
import { coursesDetails } from '../../data';
import './Courses.css'
import {HiMiniChevronDoubleRight} from 'react-icons/hi2'
import {AiFillClockCircle, AiFillStar} from 'react-icons/ai'
import {HiShoppingCart} from 'react-icons/hi2'
import parse from 'html-react-parser';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const Courses = () => {

  
  return (
    <section className='courses'>

      <div className="container">

        <div className="row align-items-center justify-content-center">

          <div className="col-lg-8 col-md-6 col-sm-6 d-flex justify-content-end">

            <h2>Find your perfect cource</h2>

          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center">

            <div className="boxes">
              <span className="box main-bg"></span>
              <span className="box"></span>
              <span className="box"></span>
              <span className="box"></span>
            </div>

            <div className="view-all-btn main-bg">
              <span className='view'>
                VIEW ALL
              </span>

                <HiMiniChevronDoubleRight/>  
              
            </div>
          </div>


        </div>

        <Swiper
        slidesPerView={4}
        spaceBetween={18}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {coursesDetails.map(({img, desc, instructorImg, instructorName, duration, rating, price}, idx) => (
          
          <SwiperSlide key={idx} className= {'slider-redius-'+(idx%4)}>

            <img className='w-100' src={img} alt={desc} />
            <h3>{parse(desc)}</h3>
            <div className="details d-flex align-items-center justify-content-around">
              <span className='instructor-img'>
                <img src={instructorImg} alt={instructorName} />
              </span>
              <span className='instructor-name'>
                {instructorName}
              </span>

              <span className='duration'>
                <AiFillClockCircle className='clock-icon'/>
                {duration} months
              </span>

              <span className='rating'>
                <AiFillStar className='star-icon'/>
                {rating}
              </span>

            </div>

            <div className="price me-0">
              {price}.00 SAR
            </div>

            <button className='w-100 Btn'>

              <HiShoppingCart className='cart-icon'/> Add to Cart

            </button>

          </SwiperSlide>
        ))}
      
      </Swiper>

      </div>

      
      



    </section>
  )
}

export default Courses
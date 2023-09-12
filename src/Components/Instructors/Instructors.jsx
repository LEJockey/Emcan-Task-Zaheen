import React from "react"
import './Instructors.css'
import { instructorsDetails } from "../../data"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';


const Instructors = () => {
  return (
    <section className="instructors">
      <div className="container-fluid">

        <div className="row flex-nowrap overflow-hidden">

          <div className="col-md-4 col-sm-12">

            <h2>
            Instructors who <br/> have achieved the <br/> career you want.
            </h2>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

          </div>

        <div className="col-md-8 col-sm-12">

          <Swiper
            scrollbar={{
              hide: false,
              draggable: true
            }}
            slidesPerView= 'auto'
            spaceBetween={28}
        modules={[Scrollbar]}
        className="mySwiper"
      >

          {instructorsDetails.map(({name, title, img, desc1, desc2, desc3}, idx) => (
              <SwiperSlide key={idx} className={'slide-radius-'+(idx%2)}>

                <img className="inst-img" src={img} alt={name} />

                <div className="instructor-info">
                  <h3>
                    {name}
                  </h3>

                  <h4>
                    {title}
                  </h4>

                  <p className="desc-1">{desc1}</p>
                  <p className="desc-2">{desc2}</p>
                  <p className="desc-3">{desc3}</p>
                </div>

              </SwiperSlide>
          ))}

          </Swiper>


        </div>
      </div>

      </div>
    </section>
  )
}

export default Instructors
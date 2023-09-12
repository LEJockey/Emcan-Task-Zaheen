import React from "react"
import './Testimonial.css'
import { testimonialDetalis } from "../../data"
import {BiSolidStar, BiSolidStarHalf} from 'react-icons/bi'


const Testimonial = () => {
  return (
    <section className="testimonial">

      <div className="d-flex justify-content-center">

      <h2>What Students<br/> Say </h2>
      </div>
      

      <div className="row justify-content-center flex-wrap-reverse">

        {testimonialDetalis.map(({name, img, duration, review},idx) => (

          <div className="col-lg-4 col-md-6" key={idx}>

            <div className="testimonial-desc">

              <div className="avater">

                <img src={img} alt={name} />

              </div>

              <div className="review">

                <h4>{name}</h4>

                <div className="review-details">

                  <span className="review-rate me-2">
                    <BiSolidStar/>
                    <BiSolidStar/>
                    <BiSolidStar/>
                    <BiSolidStar/>
                    <BiSolidStarHalf/>
                  </span>

                  <span className="duration">
                    {duration} Weeks
                  </span>

                </div>

                <div className="review-comment">

                  <p>{review}</p>

                </div>

              </div>
            </div>

          </div>

        ))}
        
      </div>


    </section>
  )
}

export default Testimonial
import React from "react"
import './JoinUs.css'
import joinUs from '../../assets/Join-Us/join-us.png'

const JoinUs = () => {
  return (
    <section className="join-us">
      <div className="row">
        <div className="col-lg-6 p-0">
          <img className="w-100 h-100" src={joinUs} alt="Become Instructor" />
        </div>
        <div className="col-lg-6 bg-white join-description">

          <div className="desc-info">

            <h2>
              Become an instructor
            </h2>

            <p className="p-one mb-4">
              Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
            </p>

            <p className="p-two">
              Become an instructor and change lives — including your own.
            </p>

            
            <button>
              Get Started
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}

export default JoinUs
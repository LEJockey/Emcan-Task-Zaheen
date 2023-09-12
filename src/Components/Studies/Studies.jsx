import React from "react"
import './Studies.css'
import { studiesDetails } from "../../data"

const Studies = () => {
  return (
    <section className="studies mt-5">
      
      <h2 className=" text-center">Top Subjects</h2>

      <div className="row justify-content-center">

        {studiesDetails.map(({img, title}, idx)=> 
        <div className="col-lg-4 col-md-6" key={idx}>
          <div className="card">

            <img src={img} class="card-img-top" alt={title}/>

            <div className="card-body">

              <a href="./#">{title}</a>

            </div>
          </div>
        </div>
          )}
      </div>
    </section>
  )
}

export default Studies
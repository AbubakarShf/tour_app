import React from "react";
import Tour from "./Tour";

const Tours = ({ tourData,removeTour }) => {
  return (
    <section className='title'>
      <h2>Our Tours</h2>
      <div className='underline'></div>
      <div>
        {tourData.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
        })}
      </div>
    </section>
  )
}
export default Tours

import React, { useState } from "react"
const Tour = ({ id, image, info, price, name,removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <React.Fragment>
      <article className='single-tour'>
        <img src={image} alt={name} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>{readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={()=>setReadMore(!readMore)} >
              {readMore?"show less":"show more"}
          </button>
          </p>
          <button onClick={()=>removeTour(id)} className='delete-btn'>not interested</button>
        </footer>
      </article>
    </React.Fragment>
  )
}
export default Tour

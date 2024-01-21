import React from 'react'

const Collections = (props) => {
    const {title,image1,image2,image3,image4,image5,image6,image7,image8,image9} = props.gentsFashion
  return (
    <div>
        <h3 className="gents">{title}</h3>
        <div className="men-images">
              <img src={image1} alt={image1} />
              <img src={image2} alt={image1} />
              <img src={image4} alt={image3} />
              <img src={image5} alt={image1} />
              <img src={image6} alt={image1} />
              <img src={image7} alt={image1} />
              <img src={image8} alt={image1} />
        </div>
    </div>
  )
}

export default Collections
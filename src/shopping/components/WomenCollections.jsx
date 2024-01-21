import React from 'react'

const WomenCollections = (props) => {
    const {title,image1,image2,image3,image5,image6,image7,image8} = props.ladiesFashion
  return (
    <div>
        <h3 className="gents">{title}</h3>
        <div className="men-images">
              <img src={image1} alt={image1} />
              <img src={image2} alt={image1} />
              <img src={image3} alt={image3} />
              <img src={image5} alt={image1} />
              <img src={image6} alt={image1} />
              <img src={image7} alt={image1} />
              <img src={image8} alt={image1} />
        </div>
    </div>
  )
}

export default WomenCollections
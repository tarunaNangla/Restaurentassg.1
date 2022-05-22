import React from 'react'
import styles from './RestaurantDetails.module.css'

const RestaurantDetails = (
    {
        image:url,
        name:title,
        cost:cost,
        rating:rating,
        votes:votes,
        reviews:review,
        cuisine:tag
    }

) => {
  return (
    
     

    <div className={styles.flex}>
      <div>
          <img style={{width:'100px',height:"100px"}} src={url} alt={title} />
      </div>
      <div>
          <div>{title}</div>
          <div>{tag}</div>
          <div>{rating}</div>
      </div>
      <div>
          <div>Cost ${cost}</div>
          <div>{votes}</div>
          <div>{review}</div>
          
      </div>

    
    </div>
  )
}

export default RestaurantDetails

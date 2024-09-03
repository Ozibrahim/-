import React from 'react'
import '../css/Course.css'

function Course({course}) {
    const {id,title,description,price,link,image} = course;
  return (
    
        <div className='course'>
            <img src={image} width={220} height={150}/>
            <h4 className='course-title'>{title}</h4>
            <h5 className='course-desc'>{description}</h5>
            <h3 className='course-price'>{price} ₺</h3>
            <div className='course-link'><a href={link}>Satın Almak için</a></div>
            

        </div>
  
  )
}

export default Course
import React, { useState } from 'react'
import image3 from '../assets/picture3.jpg'
import image4 from '../assets/picture4.jpg'
import image5 from '../assets/picture5.jpg'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import data from '../data'
const Popular = () => {

  const [details,setDetails] = useState(data)
  return (
    <>
    <Splide options={ {
    perPage: 1,
    drag: true,
    arrows: false,
  } }>
    
      {details.map((detail)=>{
        return(
        <SplideSlide hasTrack={ false }>
            <article key={detail.id}>
            <Link to={'/post/id'}>
              <img src={detail.image} alt="" />
              <h3>{detail.title}</h3>
              <p>{detail.desc}
              </p>
            </Link>
            </article>

        </SplideSlide>
        )
      })
        }
    </Splide>
    </>
  )
}

export default Popular

{/*
      <article>
          <Link to={'/post/id'}>
            <img src={image3} alt="" />
            <h3>10 Sea Food Recipes You'll Ever Need</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </Link>
        </article>
*/}
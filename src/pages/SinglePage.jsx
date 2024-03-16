import React from 'react'
import image1 from '../assets/picture1.jpg'
import CategoryList from '../components/CategoryList'
import { Link } from 'react-router-dom'
import { FaFacebook  } from 'react-icons/fa'
import { FaPinterest  } from 'react-icons/fa'
import { FaDribbble  } from 'react-icons/fa'
import { FaMedium  } from 'react-icons/fa'
import Footer from '../components/Footer'
import User from '../components/User'

const SinglePage = () => {
  return (
    <>
    
        <section className='single_post'>
                <nav className='single_post-nav'>
                    <h2 className='logo'>Foodie Lover</h2>
                    <div className='links'>
                        <Link to={'/'} className='link'>Home</Link>
                        <Link to={'/articles'} className='link'>Articles</Link>
                        <Link to={'/recipe'} className='link'>Recipe</Link>
                        <Link to={'/about'} className='link'>About</Link>
                       
        
                        <FaDribbble className='social_icons'/>
                        <FaMedium className='social_icons'/>
                        <FaFacebook className='social_icons'/>
                        <FaPinterest className='social_icons'/>
                    </div>
                </nav>
        
            <img src={image1} alt="" />
            
            <h2 className='title'>Glutten free, Lamonade and Almond Cake </h2>
            
                 <User/>
            
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae suscipit 
                placeat ad maiores facilis fuga, nulla quis fugiat magni aperiam enim eos quibusdam, officia dolorum perspiciatis
                culpa nesciunt animi? Inventore unde similique, doloribus mollitia itaque nesciunt? Eligendi magni ut minus unde 
                vel recusandae distinctio nihil, 
                deleniti, praesentium esse doloremque ab repellendus quisquam, modi ad perspiciatis?
                culpa nesciunt animi? Inventore unde similique, doloribus mollitia itaque nesciunt? Eligendi magni ut minus unde 
                vel recusandae distinctio nihil, 
                deleniti, praesentium esse doloremque ab repellendus quisquam, modi ad perspiciatis?
                culpa nesciunt animi? Inventore unde similique, doloribus mollitia itaque nesciunt? Eligendi magni ut minus unde 
                vel recusandae distinctio nihil, <br/>
                <br/>
                deleniti, praesentium esse doloremque ab repellendus quisquam, modi ad perspiciatis?
                culpa nesciunt animi? Inventore unde similique, doloribus mollitia itaque nesciunt? Eligendi magni ut minus unde 
                vel recusandae distinctio nihil, 
                deleniti, praesentium esse doloremque ab repellendus quisquam, modi ad perspiciatis?
                culpa nesciunt animi? <strong>Inventore unde similique, doloribus mollitia</strong> itaque nesciunt? Eligendi magni ut minus unde 
                vel recusandae distinctio nihil, 
                deleniti, praesentium esse doloremque ab repellendus quisquam, modi ad perspiciatis?
                culpa nesciunt animi? Inventore unde similique, doloribus mollitia itaque nesciunt? Eligendi magni ut minus unde 
                vel recusandae distinctio nihil, 
                deleniti, praesentium esse doloremque ab repellendus quisquam, modi ad perspiciatis?
                culpa nesciunt animi? Inventore unde similique, doloribus mollitia itaque nesciunt? Eligendi magni ut minus unde 
                vel recusandae distinctio nihil, 
                deleniti, praesentium esse doloremque ab repellendus quisquam, modi ad perspiciatis?
                culpa nesciunt animi? Inventore unde similique, doloribus mollitia itaque nesciunt? Eligendi magni ut minus unde 
                vel recusandae distinctio nihil, 
                deleniti, praesentium esse doloremque ab repellendus quisquam, modi ad perspiciatis?
                
            </p>
        </section>
    </>
  )
}

export default SinglePage
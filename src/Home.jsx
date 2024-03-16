import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebook  } from 'react-icons/fa'
import { FaPinterest  } from 'react-icons/fa'
import { FaDribbble  } from 'react-icons/fa'
import { FaMedium  } from 'react-icons/fa'
import { FaPenAlt } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { CiMenuFries } from 'react-icons/ci'
import image1 from './assets/picture1.jpg'
import image2 from './assets/picture2.jpg'
import CategoryList from './components/CategoryList'
import Search from './components/Search'
import Popular from './components/Popular'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import { UserContext } from './context/userContext'
import Loader from './components/Loader'
import axios from 'axios'




const Home = () => {

    //Burger Menu
    const [open,setOpen] = useState(false)
    const [isLoading,setIsLoading] = useState(false)

    const { currentUser } = useContext(UserContext)


    useEffect(()=>{
        setIsLoading(true)
    }
    ,[])

    if(isLoading){
        <Loader/>
    }


  return (
    <section className='section'>
        <div className='heading'>
            <div className='search_field'>
                <Search/>
            </div>
            {!currentUser?.id &&<div className='join'>
                <Link to={'/login'} className='login'>Login</Link>
                <Link to={'/register'} className='register'>Create Account</Link>
            </div>}
            
            {currentUser?.id &&<div className='loged_user'>
                <div className='write_loger'>
                    <Link to={'/#'} className='write'>Write
                    <FaPenAlt/></Link>
                </div>          
                <Link to={'/profile'} className='current_user'>{currentUser.name}</Link>
        </div>}
        </div>
        <div className="main_section">
            <nav>
                <h2 className='logo'>Foodie Lover</h2>
                <div className='links'>
                    <NavLink to={'/'} className='link'>Home</NavLink>
                    <NavLink to={'/articles'} className='link'>Articles</NavLink>
                    <NavLink to={'/recipes'} className='link'>Recipes</NavLink>
                    <NavLink to={'/about'} className='link'>About</NavLink>
    
                    <FaDribbble className='social_icons'/>
                    <FaMedium className='social_icons'/>
                    <FaFacebook className='social_icons'/>
                    <FaPinterest className='social_icons'/>
                </div>
                <div className="nav_toggle">
                    <div className="nav_btn" onClick={()=>{setOpen(!open)}}>
                        {open ? <AiOutlineClose className='nav_close'/>  : <CiMenuFries className='nav_button'/> }
                    </div>
                    {open &&<nav className='mobile_nav'>
                        <div className='link_mobile'>
                            <NavLink to={'/'} className='link'>Home</NavLink>
                            <NavLink to={'/articles'} className='link'>Articles</NavLink>
                            <NavLink to={'/recipes'} className='link'>Recipes</NavLink>
                            <NavLink to={'#about'} className='link'>About</NavLink>
                            <div className='social_mobile'>
                            <FaDribbble className='social_icons'/>
                            <FaMedium className='social_icons'/>
                            <FaFacebook className='social_icons'/>
                            <FaPinterest className='social_icons'/>
                            </div>
                            
                        </div>
                    </nav>}

                </div>
            </nav>
            <h2>Mzansi Food Lover's Blog</h2>
            <div className='cat_list'>
                <CategoryList/>
            </div>
        
                
            <div className='hero_section'>
                <img src={image2} alt="food lover" className='hero_img' />
                <div className="desc">
                    <h3 className='title'>Glutten free, Lamonade and Almond Cake </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis harum molestiae libero vel nam facilis repellat quidem aspernatur.</p>
                    <Link to={'/post/uduau'} className='read_more'>Read more</Link>
                </div>
            </div>
            <h2>Popular Posts</h2>
            <div className='popular'>
                <Popular/>
            </div>
        </div>
        {/*<div className="footer">
            <Footer/>
    </div>*/}
        
    </section>
  )
}

export default Home
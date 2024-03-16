import React from 'react'
import image1 from '../assets/picture1.jpg'
import image2 from '../assets/picture2.jpg'
import Footer from '../components/Footer'
import User from './User'
import { Link } from 'react-router-dom'

const ArticlePosts = () => {
  return (
    <section className='main_section art_posts'>
        <article className='article_page'>
            <Link to={'/post/gdhs'}>
                <img src={image2} alt="" />
                <h2 className='title'>Lamonade and Almond Cake</h2>
                <p className='article_description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aperiam voluptates....
                </p>
                <div className='article_user'>
                    <p>created at: 22 jan 2024</p>
                    <h5>By: Muzi Abas</h5>
                </div>
            </Link>
        </article>
        <article className='article_page'>
            <Link to={'/post/gdhs'}>
                <img src={image1} alt="" />
                <h2 className='title'>Lamonade and Almond Cake</h2>
                <p className='article_description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aperiam voluptates....
                </p>
                <div className='article_user'>
                    <p>created at: 22 jan 2024</p>
                    <h5>By: Muzi Abas</h5>
                </div>
            </Link>
        </article>
        <article className='article_page'>
            <Link to={'/post/gdhs'}>
                <img src={image2} alt="" />
                <h2 className='title'>Lamonade and Almond Cake</h2>
                <p className='article_description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aperiam voluptates....
                </p>
                <div className='article_user'>
                    <p>created at: 22 jan 2024</p>
                    <h5>By: Muzi Abas</h5>
                </div>
            </Link>
        </article>
        <article className='article_page'>
            <Link to={'/post/gdhs'}>
                <img src={image1} alt="" />
                <h2 className='title'>Lamonade and Almond Cake</h2>
                <p className='article_description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aperiam voluptates....
                </p>
                <div className='article_user'>
                    <p>created at: 22 jan 2024</p>
                    <h5>By: Muzi Abas</h5>
                </div>
            </Link>
        </article>
        
    </section>
  )
}

export default ArticlePosts
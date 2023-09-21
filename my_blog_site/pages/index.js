import React, { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPostsData } from '../lib/posts-utils'






export function getStaticProps(){
    const postsData = getFeaturedPostsData()
    
    return{
        props:{
            posts: postsData
        }
    }
} 

export default function HomePage(props) {
    
  return (
    <Fragment>
        <Hero />
        <FeaturedPosts posts={props.posts}/>
    </Fragment>
  )
}



import React from 'react'
import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-utils'


export function getStaticProps (){
    const posts =  getAllPosts()
  console.log (posts)
    return {
        props:{
            posts: posts
        }
    }
}


export default function AllPostsPage(props) {

   
  return (
    <AllPosts posts={props.posts} />
  )
}

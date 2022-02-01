import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {

  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug){
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug, categories]);
  

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl font-semibold border-b pb-2'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map(post => (
        <div className="flex items-center w-full mb-4 mt-4" key={post.title}>
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className='align-middle rounded-full'
            />
          </div>
          <div className="flex-grow ml-4">
            <p className='text-gray-500 text-xs'>
              {moment(post.createdAt).format('MMM DD, YYYY')} 
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
};

export default PostWidget
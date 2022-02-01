import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug)
      .then((result) => setComments(result))
  }, [slug])
  

  return (
    <>
      {comments.length > 0 ? (
        <div className='bg-white rounded-lg shadow-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl font-semibold mb-8 border-b pb-4'>
            {comments.length}
            {' '}
            {comments.length === 1 ? 'Comment' : 'Comments'}
          </h3>
          {comments.map((comment) => (
            <div key={comment.createdAt} className='border-b border-gray-200 mb-4 pb-4'>
              <p className='mb-4'>
                <span className='font-semibold'>{comment.name}</span>
                {' '}
                on
                {' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="whitespace-pre-line text-gray-900 w-full">
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className='bg-white rounded-lg shadow-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl font-semibold mb-8 border-b pb-4'>
            No comments
          </h3>
          <p className='text-lg text-gray-800'>There are no comments on this post</p>
        </div>
      )}
    </>
  )
};

export default Comments

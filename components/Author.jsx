import React from 'react'
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative bg-black bg-opacity-20 rounded-lg'>
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={author.photo.url}
          unoptimized
          height='100px'
          width='100px'
          alt={author.name}
          className='align-middle rounded-full'
        />
       
      </div>
      <h3 className='text-white text-xl font-bold my-4'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  )
};

export default Author

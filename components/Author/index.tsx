import Image from 'next/image';
import React from 'react';

function Author({ author }) {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-5 right-0 -top-14'>
        <Image 
          unoptimized
          src={author.photo.url}
          alt={author.author}
          className=" rounded-full"
          width="100px"
          height="100px"
        />
      </div>
      <h3 className='text-white my-4 font-bold'>{author.author}</h3>
      <h3 className='text-white text-lg'>{author.bio}</h3>
    </div>
  )
}

export default Author;

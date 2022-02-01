import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((result) => setCategories(result))
  }, [])
  

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl font-semibold border-b pb-2 mb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`}key={category.slug}>
          <span className='cursor-pointer block pb-2 mb-2'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
};

export default Categories

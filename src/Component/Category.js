import React from 'react'
import {categories} from '../Data/Data'
const Category = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
      {
            categories.map((category) => (
                  <div key={category.id} className =' bg-gray-400 p-4 rounded-lg duration-300 hover:scale-105 '>
                        <div className="flex justify-between items-center">
                        <img src= {category.image} alt= {category.name} className ='max-w-[50%] object-cover' />
                        <p>{category.name}</p>
                        </div>
                  </div>
            ))
      }
      </div>
    </div>
  )
}

export default Category

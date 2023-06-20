import React from 'react'

const BaseButtons = () => {
  return (
    <div className=' mt-5 flex flex-row justify-center align-center gap-1'>
      <button className='btn btn-primary'>List Item</button>
      <input type="text" placeholder="Search Item" className="input input-bordered input-primary w-full max-w-xs" />
    </div>
  )
}

export default BaseButtons
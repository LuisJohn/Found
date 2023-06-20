import React from 'react'
import {GrMapLocation} from 'react-icons/gr'

const page = () => {
  return (
    <>
    {/* For Mobile Screens */}
      <div className='md:hidden artboard flex flex-row justify-center'>
        <div className="w-97 bg-base-100">
          <figure><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Black Pair of Headphones!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>


            <p className='flex flex-row gap-4 text-lg'><GrMapLocation size={25} className=''/>Av. Renata Sadimba,  Malangalene B</p>
            


            <div className="card-actions">
              <button className="btn btn-primary w-full">Claim Item</button>
            </div>
          </div>
        </div>
      </div>

    {/* For Larger Screens */}
    </>
  )
}

export default page
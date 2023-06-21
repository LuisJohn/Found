import React from 'react'

const Profile = () => {
  return (
    <>
        <div className='flex flex-row justify-center p-5'>
            <div className="avatar online">
                <div className="w-24 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </div>
        <div className='flex justify-center p-5'>
            <h3 className='text-lg font-bold'>Luis John</h3>
        </div>
    </>
  )
}

export default Profile
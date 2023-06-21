import { RiUserLocationLine } from 'react-icons/ri';
import { BsTelephoneInbound } from 'react-icons/bs';


const DesktopView = () => {
  return (
    <div className='hidden md:flex flex-row justify-center mr-2 ml-2'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">Black Pair of Headphones!</h2>
                <p>
                    I found a pair of headphones around Shoprite Matola, Unfortunatley
                    one side is broken I think Someone stepped on them
                </p>

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <h3 className='font-bold'>Founder's Information</h3>
                <div className='flex flex-row'>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <h3 className='font-bold p-8'><a href={`/profile/${1}`}>Luis Zeca John</a></h3>
                    </div>
                </div>
                <p className='flex flex-row gap-4 text-lg mt-4'><RiUserLocationLine size={25} className=''/>Av. Renata Sadimba,  Malangalene B</p>
                <p className='flex flex-row gap-4 text-lg mt-4'><BsTelephoneInbound size={25} className=''/>+258 83 320 7350</p>

                <div className="card-actions">
                    <button className="btn btn-primary w-full">Claim Item</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DesktopView
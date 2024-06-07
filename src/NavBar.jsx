import React from 'react'


function NavBar() {
  return (
    <div className='h-24 border-1 border-red-600 flex justify-between pt-3 mx-24'>
        <div className='border-1 w-20 h-10 border-purple-300'><img className=' bg-cover' src='./src/assets/brand_logo.png' alt="" /></div>
        <div className='border-1 border-purple-300'>
            <ul className='flex justify-between mt-2'>
                <li className='mx-4 text-gray-700 font-bold '>Menu</li>
                <li className='mx-4 text-gray-700 font-bold'>Location</li>
                <li className='mx-4 text-gray-700 font-bold'>About</li>
                <li className='mx-4 text-gray-700 font-bold'>Contact</li>

            </ul>
        </div>
        <div className=''>
            <button className='mx-4 bg-red-600 py-1 px-4 mt-1 text-white font-medium'> Login </button>
        </div>
    </div>
  )
}

export default NavBar
import React from 'react'

export default function ContactUs() {
  return (
    <>
    <div className='ml-[188px]'>
        <div className='pt-36 '></div>
        <div className='w-80 h-20 '>
            <h1 className='text-5xl text-black h-1/2 font-bold mt-5'>Contact Us</h1>
        </div>
        <p className='text-base w-2/3'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        <div className='h-52  flex'>
        <div className='w-1/2 h-full '>

            <div className='flex mt-[71.5px]'>
                <button className='w-[220px] h-12 bg-black text-white mr-8 rounded-md'>
                    via support chat
                </button>
                <button className='w-[220px] h-12 bg-black text-white rounded-md'>
                    via call
                </button>
            </div>
            <div className='w-[472px]'>
                <button className='w-full h-12 bg-white text-black border-[1px] border-black mr-8 mt-[17px] rounded-md'>
                    via email form
                </button>
                <form action="" className='flex mt-[24px] left-[16px] gap-5 w-[440px] flex-col relative'>
                    <div>
                    <label htmlFor="name" className='absolute left-[28px] top-[-8px] bg-white'>Name</label>
                    <input type="text" name="name" className='w-full mt-1 border-[1px] border-gray-500 rounded-sm h-[50px]' />
                    </div>
                    <div>
                    <label htmlFor="email" className='absolute left-[28px] top-[66px] bg-white'>Email</label>
                    <input type="email" name="email" className='w-full mt-1 border-[1px] border-gray-500 rounded-sm h-[50px]' />
                    </div>
                    <label htmlFor="name" className='absolute left-[28px] top-[140px] bg-white'>Text</label>
                    <textarea type="text" name="name"  rows="5" className='w-full mt-1 border-[1px]  border-gray-500 rounded-sm '/>
                    
                    <button className='ml-auto w-[220px] h-12 bg-black text-white rounded-md mb-6'>
                    Submit
                </button>
                </form>
            </div>
        </div>
        
        <div>
            <img src="./src/assets/Service.svg" alt="" />
        </div>
        </div>
    </div ></>
  )
}

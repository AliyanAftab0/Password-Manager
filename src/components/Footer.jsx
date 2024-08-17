import React from 'react'

const Footer = () => {
    return (
        <div className="absolute top-[90%] z-[-2] w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className='text-white flex flex-col justify-center items-center sticky  w-full'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-500'> &lt;</span>

                <span>Pass</span><span className='text-green-500'>OP/&gt;</span>


            </div>
            <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> by Aliyan Aftab </div>
        </div>
        </div>
    )
}

export default Footer
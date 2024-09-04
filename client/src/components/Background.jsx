import React from 'react'

const Background = () => {
  return (
    <>
        <div className='fixed z-[2] w-full h-screen'>
        <div className='w-full absolute top-[5%] py-10 flex justify-center text-zinc-600 text-xl font-semibold'>Document.</div>
        <h1 className='text-zinc-900 font-semibold text-[12vw] leading-none tracking-tight absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Docs.</h1>
        </div>
    </>
  )
}

export default Background
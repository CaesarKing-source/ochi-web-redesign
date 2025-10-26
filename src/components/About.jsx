import { motion } from 'framer-motion'
import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className='w-full p-20 bg-[#CDEA68] text-black'>
      <h1 className="font-['Neue_Montreal'] text-[3vw] leading-[3.5vw] tracking-tight">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, 
        sell products, explain complex ideas, and hire great people.</h1>

        <div className="w-full border-t-[2px] pt-10 mt-20 border-[#b0c75d] flex justify-between items-start">
            <div className="w-1/2">
                <h1 className='text-5xl font-sans mb-6 tracking-tight'>Our approach:</h1>
                <button className="w-[200px] px-10 py-4 bg-zinc-900 flex justify-between items-center gap-6 text-white uppercase rounded-full">Read More 
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div> </button>
            </div>
            <motion.div initial={{scale: 0}} whileInView={{ scale: 1 }} transition={{ease: 'linear', duration: 1 }} className="w-1/2">
                <div className="w-full h-[60vh] rounded-2xl bg-cover bg-center
                  bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')]"></div>
            </motion.div>
        </div>
    </div>
  )
}

export default About

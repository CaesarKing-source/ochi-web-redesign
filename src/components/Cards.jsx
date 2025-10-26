import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const Cards = () => {
  const reference = useRef(null)
  return (
    <div ref={reference} className='w-full h-screen bg-zinc-100 p-20 flex items-center gap-10'>
        <div className="cardContainer w-1/2 h-[50vh]">
            <div className="card w-full h-full relative rounded-2xl bg-[#004D43] flex justify-center items-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="card-img"/>
                <button className="absolute px-5 py-1 border-2 border-[#CDEA68] rounded-full left-10 bottom-10">
                    <span className='text-[#CDEA68]'>2019-2022</span>
                </button>

            </div>
        </div>

        <div className="cardContainer w-1/2 h-[50vh] flex gap-10">
            <motion.div drag dragConstraints={reference} className="card w-1/2 rounded-2xl bg-[#0f1816] relative flex justify-center items-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="card-img"/>
                <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
                    <span>2019-2022</span>
                </button>
            </motion.div>
            <motion.div drag className="card w-1/2 rounded-2xl bg-[#212121] relative flex justify-center items-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="card-img"/>
                <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
                    <span>2019-2022</span>
                </button>
            </motion.div>
        </div>
    </div>
  )
}

export default Cards

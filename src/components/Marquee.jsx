import {motion} from 'framer-motion'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.3" className='w-full py-20 bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden py-10">
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 10}} 
            className='text-[15vw] uppercase leading-none tracking-tight -mt-8 font-bold pr-20'>
              We are Ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 10}} 
            className='text-[15vw] uppercase leading-none tracking-tight -mt-8 font-bold pr-20'>
              We are Ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: 'linear', repeat: Infinity, duration: 10}} 
            className='text-[15vw] uppercase leading-none tracking-tight -mt-8 font-bold pr-20'>
              We are Ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee

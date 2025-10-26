import { motion } from 'framer-motion'
import { useState } from 'react'
import {Power4} from 'gsap'

const Featured = () => {
  const [isHoving, setIsHoving] = useState(false)
  return (
    <div className="w-full py-10 px-20 bg-zinc-900">
        <div className="w-full py-10 border-b-[1px] border-zinc-700">
            <h1 className="font-['Neue_Montreal'] text-[3vw] tracking-tight">Featured projects</h1>
        </div>
        <div className="cards w-full mt-10 px-20 flex gap-10">
            <div onMouseEnter={() => setIsHoving(true)} onMouseLeave={() => setIsHoving(false)} className="cardContainer relative w-1/2 h-[70vh]">
                <h1 className="absolute overflow-hidden text-[6vw] text-[#CDEA68] flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tight">
                {"FYDE".split('').map((item, index) => 
                    <motion.span initial={{y: '100%'}} animate={ isHoving ? { y: "0%" } : { y: "100%"}} transition={{ease: Power4.easeInOut, delay: index*0.1}}
                        className="inline-block" key={index}>{item}</motion.span>)}    
                </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden">
                    <img className="w-full h-full bg-cover bg-center" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="product-img" />
                </div>
            </div>
            <div className="cardContainer relative w-1/2 h-[70vh]">
                <h1 className="absolute text-[6vw] text-[#CDEA68] flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tight">
                    {"VISE".split('').map((item, index) => <motion.span className="inline-block" key={index}>{item}</motion.span>)}
                </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden">
                    <img className="w-full h-full bg-cover bg-center" src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="product-img" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Featured

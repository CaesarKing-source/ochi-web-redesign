import { motion } from 'framer-motion'

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-100 h-screen bg-zinc-900 pt-2">
      <div className="textStructure mt-[200px] px-20">
          {['We Create', 'Eye Opening', 'Presentations'].map((headingItem, index) => {
            return (
              <div key={index} className="masker">
                <div className="w-fit flex items-center">
                  { index === 1 && (
                    <motion.div initial={{width: 0}} animate={{width: '8vw'}} transition={{ease: [0.76, 0, 0.24, 1], delay: 0.4, duration: 1.5}} 
                      className="w-[8vw] h-[5vw] mr-[1vw] rounded-md relative mt-[1vw] bg-green-500"></motion.div>
                  )}
                  <h1 className="text-9xl font-sans leading-[6vw] tracking-tighter font-semibold uppercase">{headingItem}</h1>
                </div>
              </div>
            )
          })}
      </div>
          
      <div className="border-t-2 border-zinc-600 mt-32 flex justify-between items-center py-4 px-20 font-['Neue_Montreal']">
      {
        ['For public and private companies', 'From the first pitch to IPO'].map((item, index) => {
        return (
          <p className="text-md font-sans font-zinc-100">{item}</p>
        )
      }) }
      <div className="start">
        <button className="border-[2px] border-zinc-500 rounded-full text-sm capitalize px-10 py-3">
          Start the project</button>
      </div>
      </div>
    </div>
    
  )
}

export default LandingPage

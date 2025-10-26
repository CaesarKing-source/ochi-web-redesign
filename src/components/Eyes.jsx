import React, { useEffect, useState } from 'react'

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener('mousemove', function(e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX - (window.innerWidth)/2;
        let deltaY = mouseY - (window.innerHeight)/2;

        var angle = Math.atan2(deltaX, deltaY) * (180/Math.PI);
        setRotate(180 - angle);
    })
  })


  return (
    <div className='eyes w-full h-screen overflow-hidden'>

        <div data-scroll data-scroll-speed="-0.7" className='relative w-full h-screen bg-cover bg-center bg-[url("assets/eyesBackground.jpg")]'>
            <div className="w-1/3 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
                <div className='w-[15vw] h-[15vw] flex justify-center items-center bg-white rounded-full'>
                    <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 w-full h-10'>
                            <div className="w-10 h-10 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className='w-[15vw] h-[15vw] flex justify-center items-center bg-white rounded-full'>
                <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 w-full h-10'>
                            <div className="w-10 h-10 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Eyes

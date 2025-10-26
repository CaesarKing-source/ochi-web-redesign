import React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full p-20 bg-[#CDEA68] text-black"
    >
      <h1 className="font-['Neue_Montreal'] text-[3vw] leading-[3.5vw] tracking-tight mb-10">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      <div className="flex justify-between w-full text-lg border-t-[2px] border-[#b0c75d] py-10">
        <motion.p
          initial={{ opacity: 0, y: "100px" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ ease: "linear", duration: 0.5 }}
          className="w-2/3"
        >
          What can you expect:
        </motion.p>

        <div className="flex flex-col gap-10 w-1/3">
          <motion.p
            initial={{ opacity: 0, y: "100px" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            We don't just make slides. We shape strategy, storytelling, design
            scalable brand systems, and build presentations that make people
            say: "I want in!"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: "100px" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            Our clients make the world go round – from deep tech, aerospace and
            robotics to music festivals and Michelin-starred restaurants.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: "100px" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber,
            Lexus, Salience Labs, Trawa and AllThingsGo.
          </motion.p>
        </div>
      </div>

      <div className="w-full border-t-[2px] pt-10 mt-20 border-[#b0c75d] flex justify-between items-start">
        <div className="w-1/2">
          <h1 className="text-5xl font-sans mb-6 tracking-tight">
            How we can help:
          </h1>
          <motion.button
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="w-[200px] px-8 py-4 bg-zinc-900 flex justify-between items-center gap-6 text-white uppercase rounded-full group overflow-hidden relative"
          >
            Read More
            <motion.div
              variants={{
                initial: { width: 10, height: 10, padding: 0 },
                hover: { width: 46, height: 46, padding: 4 },
              }}
              transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="bg-zinc-100 text-black rounded-full absolute right-5 flex justify-center items-center"
            >
              <motion.span
                variants={{
                  initial: { opacity: 0, y: 5 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.1,
                }}
              >
                <MdOutlineArrowOutward size={18} />
              </motion.span>
            </motion.div>
          </motion.button>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "linear", duration: 1 }}
          className="w-1/2"
        >
          <div
            className="w-full h-[60vh] rounded-2xl bg-cover bg-center
              bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg')]"
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

import { motion, useAnimation } from "framer-motion";
import { GoDotFill } from "react-icons/go";

const projects = [
    {
      id: 0,
      title: "Salience labs",
      image:
        "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png",
      direction: "left",
      text: "SALIENCE LABS",
    },
    {
      id: 1,
      title: "Medallia Experience",
      image:
        "https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png",
      direction: "right",
      text: "MEDALLIA EXPERIENCE",
    },
    {
      id: 2,
      title: "All things go",
      image:
        "https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png",
      direction: "left",
      text: "ALL THINGS UP",
    },
    {
      id: 3,
      title: "Vise",
      image:
        "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png",
      direction: "right",
      text: "VISE",
    },
  ];

const Featured = () => {
  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
  const scaleAnims = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

  const handleHoverStart = (index) => {
    cards[index].start({ y: "0%" });
    scaleAnims[index].start({ scale: 0.95 });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
    scaleAnims[index].start({ scale: 1 });
  };

  return (
    <div className="w-full py-10 px-20 bg-zinc-900">
      <div className="w-full py-10 border-b-[1px] border-zinc-700">
        <h1 className="font-['Neue_Montreal'] text-[3vw] tracking-tight">
          Featured projects
        </h1>
      </div>

      {/* Cards Container */}
      <div className="w-full mt-10 flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onHoverStart={() => handleHoverStart(index)}
            onHoverEnd={() => handleHoverEnd(index)}
            className="cardContainer relative w-[48%] h-[70vh] cursor-pointer mb-10"
          >
            <div className="flex items-center gap-2 uppercase mb-2">
              <GoDotFill />
              <h2 className="text-lg font-normal tracking-tight">{project.title}</h2>
            </div>

            <h1
              className={`absolute z-10 overflow-hidden font-semibold text-[6vw] text-[#CDEA68] flex 
                ${
                  project.direction === "left"
                    ? "left-full -translate-x-1/2"
                    : "right-full translate-x-1/2"
                } 
                top-1/2 -translate-y-1/2 tracking-tight pointer-events-none`}
            >
              {project.text.split("").map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={cards[index]}
                  transition={{
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                    delay: i * 0.04,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            {/* Card Image */}
            <motion.div
              animate={scaleAnims[index]}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="card w-full h-full rounded-xl overflow-hidden z-0"
            >
              <img
                className="w-full h-full object-cover object-center"
                src={project.image}
                alt={project.title}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

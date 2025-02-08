import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import Logo1 from "../assets/logos/amazon.png";
import Logo2 from "../assets/logos/dribble.png";
import Logo3 from "../assets/logos/hubspot.png";
import Logo4 from "../assets/logos/notion.png";
import Logo5 from "../assets/logos/netflix.png";
import Logo6 from "../assets/logos/zoom.png";


const LogoCarousel = () => {
  const data = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];
  const controls = useAnimation();
  const duplicatedData = [...data, ...data];
  
  useEffect(() => {
  
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div className=" pt-24 overflow-hidden">
      <motion.div
        className="flex gap-24 justify-between items-center "
        animate={controls}
      >
        {duplicatedData.map((item, index) => (
      
            <img
              src={item}
              key={index}
             
              alt={"Brand " + index}
              className="h-12 grayscale hover:grayscale-0"
            />
      
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;

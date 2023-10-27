import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motions";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a 17 year old student who loves physics, cosmology, and quantum physics. Ever since I was a child, I have been fascinated by the mysteries of nature and the universe. I enjoy reading books and articles on these topics, watching documentaries and lectures, and doing experiments at home or at school. Physics is not just a subject for me, but a way of exploring reality and discovering new possibilities. One of my main interests in cosmology is the study of the origin, structure, and evolution of the universe. I am amazed by how cosmic inflation, driven by an inflaton field, can explain the large-scale features of our observable universe. I also wonder about what lies beyond our horizon, whether there are other universes in a multiverse, and how quantum gravity could unify general relativity and quantum mechanics. Another area that captivates me is quantum physics, I am intrigued by how quanta behave very differently from macroscopic matter, exhibiting phenomena such as wave-particle duality, superposition, entanglement and tunneling. I also want to learn more about how quantum physics can enable new technologies that use quantum information, such as quantum computing and cryptography.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
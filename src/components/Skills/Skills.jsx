import React, { useState } from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

import LeftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";
import { skillsData } from '../../data/skillsData';

function Skills() {

  const transition = {type: 'spring', duration: 3};

  const [selected, setSelected] = useState(0);
  const skLength = skillsData.length;
  const [hoverSelect, setHoverSelect] = useState(0)


  const leftArrowMove = () => {
    selected === 0
        ? setSelected(skLength -1)
        : setSelected((prev) => prev -1);
  }

  const rightArrowMove = () => {
    selected === skLength - 1
        ? setSelected(0)
        : setSelected((prev) => prev +1);
  }

  const hoverSelected = (i) => {
    setHoverSelect(i);
  }

  const hoverDisable = (i) => {
    setHoverSelect(i)
    
  }

  return (
    <section className='skills-container  main-container' id='skills'>
        <div className='title-control'>
          <img src={ LeftArrow } onClick={leftArrowMove} alt="" />
          <motion.h1 className='skills-title'
          key={selected}
          initial={{opacity: 0, x: -50}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 100}}
          transition={{transition}}>{ skillsData[selected].title }<span className='stroke-text'>end</span></motion.h1>
          <img src={ RightArrow } onClick={rightArrowMove} alt="" />
        </div>
        <div className='section-select'>
          <div>
            <div className={ selected === 0 ? 'section-selected' : 'section-no-selected' }></div>
            <div className={ selected === 1 ? 'section-selected' : 'section-no-selected' }></div>
          </div>
          <p>Tecnologias em que tenho conhecimento</p>
        </div>
        <div className='skills'>
          <div>
            <div>
                <p className='hover-mouse-p'>Passe o mouse por cima 🖱️</p>
                <motion.div key={selected}
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                transition={{transition}}>
                  {
                    skillsData[selected].skills.map((icon, i) => (
                      <img  className='skill-icon' onMouseOver={() => hoverSelected(i)} onMouseLeave={() => hoverDisable(i)} key={i} src={icon.icon} alt="" />
                      ))
                    }
                </motion.div>
            </div>
          </div>
          <aside>
            <div>
              <div>
                <motion.h2
                key={selected}
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                transition={{transition}}>
                  {
                    skillsData[selected].skills[hoverSelect].title
                  }
                </motion.h2>
                <motion.p
                key={selected +2}
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                transition={{transition}}>
                  {
                    skillsData[selected].skills[hoverSelect].description
                  }
                </motion.p>
                <motion.p
                 key={selected +1}
                 initial={{opacity: 0, x: 100}}
                 animate={{opacity: 1, x: 0}}
                 exit={{opacity: 0, x: -100}}
                 transition={{transition}}>
                  {
                    skillsData[selected].skills[hoverSelect].expirience
                  }
                </motion.p>
              </div>
            </div>
          </aside>
        </div>
    </section>
  )
}

export default Skills;
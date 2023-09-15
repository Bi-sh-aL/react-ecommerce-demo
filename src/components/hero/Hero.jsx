import React from "react";
import "./Hero.scss";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import HeroImg from "../../assets/hero.png";
import { motion } from "framer-motion"

function Hero() {
  const transition = {duration: 3, type: "spring"};
  return (
    <div className="hero-container">
      {/* Left Side */}
      <div className="h_sides">
        <span className="text1">skin protection cream</span>

        <div className="text2">
          <span>Trendy Collection</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, saepe.
          </span>
        </div>
      </div>

      {/* Middle side hero image */}
      <div className="wrapper">
        {/* Circle Animation */}
        <motion.div
        initial={{bottom: "2rem"}}
        whileInView={{bottom : "0rem"}}
        className={"blueCircle"}
        transition= {transition}
      ></motion.div>
        <div className="blueCircle"></div>
        {/* Image Animation */}
        <motion.img
        transition={transition}
        initial={{bottom:"-2rem"}}
        whileInView={{bottom:"0rem"}}
          img src={HeroImg} alt="" width={600} />
          {/* Bag div animation */}
         
        <motion.div
           transition={transition}
           initial={{right: "5%"}}
           whileInView={{right: "-2%"}}
           className={"cart2"}
         >
          <RiShoppingBagFill className="bag"/>
          <div className="signup">
            <span>Best Signup Offers</span>
            
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
      {/*Hero right Side*/}
      <div className="h_sides">
        <div className="traffic">
            <span>1.5m</span>
            <span>Monthly Traffic</span>
        </div>
      

      <div className="customers">
        <span>100k</span>
        <span>Happy Customers</span>
      </div>
    </div>
    </div>
  );
}

export default Hero;

import React from 'react'
import ProductData from '../data/ProductData'
import Plane from '../assets/plane.png'
import './collection.scss'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
function Collections() {
  const transition = {duration: 3, type: "spring"};
  return (
    <motion.div className={'c-container'}
      
      initial={{bottom: "2rem"}}
      whileInView={{bottom : "0rem"}}
      transition= {transition}>
      <img src={Plane} alt="" />
      <h1>Our Collections</h1>
     
         <div className="collection-list">
                {
                    ProductData.map((a)=>(
                        <Link to={`/collections/product/${a.id}`} className="collection-product">
                        <div className="left-s">
                           <div className="name">
                              <span>{a.name}</span>
                              <span>{a.detail}</span>
                            </div> 
                            <span>{a.price}$</span>
                            <a href="#">Add to bag</a>
                        </div>
                        <img src={a.img} alt="" className='img-p'/>
                        
                        </Link>
                    ))
                }
            </div>
    </motion.div>
  )
}

export default Collections
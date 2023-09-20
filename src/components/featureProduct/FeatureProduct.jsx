import React, { useState } from 'react'
import './feature.scss'
import Plane from '../../assets/plane.png'
import ProductData from '../../data/ProductData'
import {useAutoAnimate} from '@formkit/auto-animate/react'
import { Link } from 'react-router-dom'


function FeatureProduct() {
    const [parent] = useAutoAnimate()
    const [menuProduct,setMenuProduct] = useState(ProductData)
    const filter = (type) =>{
        setMenuProduct(ProductData.filter((product)=>product.type==type))
    }
  return (
    <div className='f-container'>
        <img src={Plane} alt="" />
        <h1>Our Featured Products</h1>

        <div className="products">
            <ul className="feature-menu">
                <li onClick={()=>setMenuProduct(ProductData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin Care</li>
                <li onClick={()=>filter("conditioner")}>Conditioners</li>
                <li onClick={()=>filter("foundation")}>Foundations</li>
            </ul>
            <div className="list" ref={parent}>
                {
                    menuProduct.map((a)=>(
                        
                        <Link to={`/collections/product/${a.id}`} key={a.id} className="product">
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
        </div>
    </div>
  )
}

export default FeatureProduct
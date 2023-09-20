import React from 'react'
import ProductData from '../data/ProductData'
import { Link, useParams } from 'react-router-dom'
import './details.scss'


function Details() {
    var {id} =useParams()
    var pd = ProductData.find((l)=>l.id==id)
  return (
  <div className='s-product py-5 pt-5 container'>
   <nav style={{bsBreadcrumbDivider: '">"'}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
    <li className="breadcrumb-item"><Link to={'/collections/'}>Collections</Link></li>
    <li className="breadcrumb-item ">Product</li>
    <li className="breadcrumb-item">{id}</li>
  </ol>
</nav>

    <div className='row'>
        <div className='i-border col-lg-5 col-md-6 col-12'>
            <img className='pt-1'src={pd.img}  height={350}  alt="" />

        </div>
        <div className='col-lg-6 col-md-6 col-12'>
            <h3 className='pt-4fs-2 fw-bold'>{pd.name}</h3>
            <h2 className='py-2 semi-bold'>{pd.price}$</h2>
            <input type="number" value={1}/>
            <a href="" className='btn btn-primary'>Add to bag</a>
            <h4 className='mt-3 mb-3'>{pd.detail}</h4>
            <span>{pd.desc}</span>
        </div>
       
    </div>
   
  </div>

  
  )
}

export default Details
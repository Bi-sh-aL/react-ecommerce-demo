import React from 'react'
import Hero from '../components/hero/Hero'
import Slider from '../components/slider/Slider'
import FeatureProduct from '../components/featureProduct/FeatureProduct'
import Testimonial from '../components/testimonial/Testimonial'

function Home() {
  return (
    <>
    <Hero/>
    <Slider/>
    <FeatureProduct/>
    <Testimonial/>
    </>
  )
}

export default Home
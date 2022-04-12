import React from 'react'
import './styles.css'
import SingleProduct from './SingleProduct'
import { useContext } from 'react'
import { ContextStore } from '../Context/ContextStore'

function Home() {
  const { products } = useContext(ContextStore)
  return (
    <div className="productContainer">
      {products.map((individualProduct) => {
        return <SingleProduct key={products.id} product={individualProduct} />
      })}
    </div>
  )
}

export default Home

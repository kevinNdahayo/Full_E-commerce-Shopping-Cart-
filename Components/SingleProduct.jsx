import React from 'react'
import './styles.css'
import { useContext } from 'react'
import { ContextStore } from '../Context/ContextStore'
const SingleProduct = ({ product }) => {
  const { cart, setCart } = useContext(ContextStore)
  const priceInRwf = Number(product.price) * 13.6
  const priceInString = priceInRwf.toString()
  const insertCartItem = () => {
    setCart([...cart, product])
  }
  const removeCartItem = () => {
    setCart(cart.filter((c) => c.id !== product.id))
  }
  console.log(cart)
  return (
    <div className="products">
      <img src={product.image} alt={product.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{product.name}</span>
        <span>Rwf {priceInString.substring(0, 3)}</span>
      </div>
      {cart.includes(product) ? (
        <button className="add" onClick={removeCartItem}>
          Remove from Cart
        </button>
      ) : (
        <button className="add" onClick={insertCartItem}>
          Add to Cart
        </button>
      )}
    </div>
  )
}

export default SingleProduct

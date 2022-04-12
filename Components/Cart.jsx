import React from 'react'
import './Cart.css'
import './styles.css'
import { useContext, useEffect } from 'react'
import { ContextStore } from '../Context/ContextStore'
import SingleProduct from './SingleProduct'

function Cart() {
  const { cart, total, setTotal } = useContext(ContextStore)
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart])
  return (
    <div className="cart ">
      <span>My Cart</span>
      <br />
      <span>Total: {total}</span>
      <div className="productContainer">
        {cart.map((product) => {
          return <SingleProduct product={product} key={product.id} />
        })}
      </div>
    </div>
  )
}

export default Cart

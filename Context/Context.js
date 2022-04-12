import React from 'react'
import { useState } from 'react'
import { ContextStore } from './ContextStore'
import { faker } from '@faker-js/faker'

faker.seed(200)
export const Context = ({ children }) => {
  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }))
  const [products] = useState(productsArray)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState()
  return (
    <ContextStore.Provider value={{ products, cart, setCart, total, setTotal }}>
      {children}
    </ContextStore.Provider>
  )
}

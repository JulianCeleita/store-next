import React from 'react'
import { Divider } from 'semantic-ui-react'
import { Layout } from '@/components/Layout'
import CartItemList from '@/components/CardItemList/CardItemList'
import CartSummary from '@/components/CartSummary/CartSummary'
import { useCart, useCartMutations } from '@/components/store/Cart'

const CartPage = () => {
  const { items, count } = useCart()
  const { removeFromCart } = useCartMutations()

  return (
    <Layout>
      <CartItemList items={items} removeFromCart={removeFromCart} />
      <Divider />
      <CartSummary totalAmount={count} />
    </Layout>
  )
}

export default CartPage
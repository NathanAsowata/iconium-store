import type { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import styles from "../styles/Cart.module.scss"

const Cart = () => {

  // Get products from the redux store
  const products = useSelector((state: RootState) => state.product.value)

  // Array to calculate the total price of all products in the cart
  const totalPrice: number[] = []
  
  const addTotalPrice = (total: number, number: number) => {
      return total + number
  }

  // If there are no products in the cart
  if (typeof products !== 'undefined' && products.length === 0) {
    return(<h1 className={styles.title}>Oops! You have an empty cart.</h1>)
  }
  
  // If there are products in the cart
  if (products.length > 0){
      return(
      <>
        <h1 className={styles.title}>Your Cart</h1>

        <main className={styles.container}>
          {products.map((product, index) => {

            totalPrice.push(product.quantity * product.price)

            return(
              <div key={index} className={styles.item}>
                <span className={styles.productName}>{product.name}</span>
                <span>{product.quantity} {product.quantity === 1 ? "unit" : "units"} </span>
                <span className={styles.productCost}>${Math.round(product.quantity * product.price)}</span>
              </div>
            )
          })}

          <div className={styles.item}>
                <span className={styles.productName}>TOTAL</span>
                <span className={styles.productCost}>${totalPrice.reduce(addTotalPrice)}</span>
              </div>
        </main>
      </>
    )
  }
  
}

export default Cart
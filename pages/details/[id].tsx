import Head from 'next/head'
import Image from 'next/image'
import Stars from '../../components/Stars'
import styles from "../../styles/Details.module.scss"
import {useDispatch} from "react-redux"
import {addProduct} from "../../redux/productSlice"
import { useState } from 'react'


interface propTypes {
  productDetails: {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number
    }
  }
}

const Details = ({productDetails}: propTypes) => {

  const [productQuantity, setProductQuantity] = useState(1)

  const dispatch = useDispatch()

  const newProduct = {
    name: productDetails.title,
    quantity: productQuantity,
    price: productDetails.price
  }

  const addToCart = () => {
    dispatch(addProduct(newProduct))
    alert("Product added successfully")
  }

  return (
    <>
    <Head>
      <title>{productDetails.title}</title>
      <link rel="icon" href="/logo.ico"/>
    </Head>
    <div className={styles.container}>
      <section className={styles.image}>
        <Image 
          src={productDetails.image}
          alt={productDetails.title}
          width={300}
          height={350}
        />
      </section>
      <section>
        <h1 className={styles.title}>{productDetails.title}</h1>
        <p className={styles.category}>{productDetails.category}</p>
        <Stars rate={productDetails.rating.rate} />
        <p className={styles.price}>${productDetails.price}</p>
        <p className={styles.decription}>{productDetails.description}</p>
        <span className={styles.quantity}>Quantity: </span>
        <select 
          className={styles.list} 
          value={productQuantity} 
          onChange={(e) => setProductQuantity(parseInt(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button className={styles.button} onClick={addToCart}>Add To Cart</button>
      </section>
    </div>
    </>
  )
}

export const getServerSideProps = async (context: any) => {

  const productId = context.query.id
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
  const data = await res.json()

  return {
    props: {
      productDetails: data
    }
  }
}


export default Details
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Stars from '../../components/Stars'


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
  return (
    <>
    <Head>
      <title>{productDetails.title}</title>
      <link rel="icon" href="/logo.ico"/>
    </Head>
    <div>
      <Image 
        src={productDetails.image}
        alt={productDetails.title}
        width={300}
        height={350}
      />
      <section>
        <h1>{productDetails.title}</h1>
        <p>{productDetails.category}</p>
        <Stars rate={productDetails.rating.rate} />
        <p>${productDetails.price}</p>
        <p>{productDetails.description}</p>
        <span>Quantity</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button>Add To Cart</button>
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
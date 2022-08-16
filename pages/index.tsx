import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import Footer from "../components/Footer"
import ProductItem from "../components/ProductItem"
import styles from "../styles/Home.module.scss"


interface propTypes {
  products: {
    id: number,
    title: string,
    price: number,
    image: string
  }[]
}

const Home = ({products}: propTypes) => {

  const router = useRouter()
  const goToProducts = () => {
    router.push("/#products")
  }

  return(
    <>
      <Head>
        <title>Iconium Store</title>
        <meta name="description" content="Iconium Store is an ecommerce website that offers a variety of
         products ranging from men's clothing and women's clothing to jewelry and electronics" />
         <link rel="icon" href="/logo.ico" />
      </Head>
      <header className={styles.heroSection}>
        <Image 
          src={"/heroImage.png"} 
          alt={"Welcome to Iconium store"} 
          width={500}
          height={500}
          />
          <section>
            <h1>A Next Generation Shopping Experience!</h1>
            <p>
              Browse through our product catalog and experience
              shopping like you have never done! Find products 
              ranging from men&#39;s clothing to women&#39;s clothing 
              and even electronics and jewelry!!!
            </p>
            <button onClick={goToProducts}>Our Products</button>
          </section>
      </header>
      <h1 id="products"className={styles.subHeading}>Our Products</h1>
      <section className={styles.products}>
        {products.map(product => {
          return <ProductItem product={product} key={product.id} />
        })}
      </section>
      <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const results = await res.json()
  
  return {
    props: {
      products: results
    }
  }
}


export default Home
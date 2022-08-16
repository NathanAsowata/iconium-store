import Head from "next/head"
import { useRouter } from "next/router"
import ProductItem from "../../components/ProductItem"
import styles from "../../styles/Category.module.scss"

interface propTypes {
  products: {
    id: number,
    title: string,
    price: number,
    image: string
  }[]
}

const Category = ({products}:propTypes) => {

  const router = useRouter()
  const categoryName = router.query.name
  return (
    <>
    <Head>
        <title>{categoryName}</title>
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
    </Head>
      <h1 className={styles.title}>{categoryName}</h1>
      <section className={styles.products}>
        {products.map(product => {
          return <ProductItem product={product} key={product.id} />
        })}
      </section>
    </>
  )
}

export const getServerSideProps = async (context:any) => {
  const categoryName = context.query.name
  const res = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
  const data = await res.json()
  console.log(data);
  

  return {
    props: {
      products: data
    }
  }
}

export default Category
import Image from "next/image"
import { useRouter } from "next/router"
import styles from "../styles/ProductItem.module.scss"

interface propTypes {
product: {
    id: number,
    title: string,
    price: number,
    image: string
}
}

const ProductItem = ({product}:propTypes) => {

    const router = useRouter()
    const showDetails = () => {
        router.push(`/details/${product.id}`)
    }

  return (
    <div key={product.id} className={styles.container} onClick={showDetails}>
        <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            layout={"responsive"}
        />
        <p>{product.title}</p>
        <p>${product.price}</p>
    </div>
  )
}

export default ProductItem
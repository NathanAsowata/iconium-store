import Link from "next/link"
import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <span>Designed and built by <Link href={"http://www.nathanasowata.com/"}><a target={"_blank"}>Nathan Asowata</a></Link>. </span>
        <span>Data provided by <Link href={"http://fakestoreapi.com/"}><a target={"_blank"}>Fake Store API</a></Link>.</span>
    </footer>
  )
}

export default Footer
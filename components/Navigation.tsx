// CSS styling for this component can be found in ./styles/globals.scss file 

import Link from 'next/link'
import {BsCartFill} from "react-icons/bs"

const Navigation = () => {
  return (
    <nav className='nav'>
        <span className='logo'>Iconium Store</span>
        <span className='menu'>
            <Link href={"#"}>
                <a>Electronics</a>
            </Link>
            <Link href={"#"}>
                <a>Jewelery</a>
            </Link>
            <Link href={"#"}>
                <a>Men's Clothing</a>
            </Link>
            <Link href={"#"}>
                <a>Women's Clothing</a>
            </Link>
            <Link href={"#"}>
                <a> <BsCartFill /> Your Cart</a>
            </Link>
        </span>
    </nav>
  )
}

export default Navigation
// CSS styling for this component can be found in ./styles/globals.scss file 

import Link from 'next/link'
import {BsCartFill} from "react-icons/bs"
import {AiOutlineMenu} from "react-icons/ai"
import { useState } from 'react'
import { useRouter } from 'next/router'

const Navigation = () => {

    const router = useRouter()
    const [isClicked, setIsClicked] = useState(false)
    const [newClass, setNewClass] =  useState("menu")

    const handleResponsiveness = () => {
        // If the navigation menu has not been displayed
        if (isClicked === false) {
            // Display the navigation menu
            setNewClass("responsive")
            // Update the state
            setIsClicked(true)
        }
        // If the navigation menu has been displayed
        if (isClicked === true) {
            // Close the navigation menu
            setNewClass("menu")
            // Update the state
            setIsClicked(false)
        }
    }

    const goHome = () => {
        router.push("/")
    }


  return (
    <nav className='nav'>
        <span className='logo' onClick={goHome}>Iconium Store</span>
        <span className={newClass}>
            <Link href={"/category/electronics"}>
                <a>Electronics</a>
            </Link>
            <Link href={"/category/jewelery"}>
                <a>Jewelery</a>
            </Link>
            <Link href={"/category/men's clothing"}>
                <a>Men&#39;s Clothing</a>
            </Link>
            <Link href={"/category/women's clothing"}>
                <a>Women&#39;s Clothing</a>
            </Link>
            <Link href={"/cart"}>
                <a> <BsCartFill /> Your Cart</a>
            </Link>
        </span>
        <AiOutlineMenu className='icon' onClick={handleResponsiveness} />
    </nav>
  )
}

export default Navigation
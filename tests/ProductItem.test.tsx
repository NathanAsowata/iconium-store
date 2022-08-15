import ProductItem from "../components/ProductItem";
import {screen, render} from "@testing-library/react"


const product= {
    id: 5,
    title: "A new product", 
    price: 205,
    image: "/heroImage.png"
}

describe("Product Item component test suite", () => {
    it("should render product image", () => { 
        const ProductComponent = render(<ProductItem product={product} />)
        const productImage = screen.getByRole("img")
        expect(productImage).toBeVisible()
    })
    it("should render product name", () => {
        const ProductComponent = render(<ProductItem product={product} />)
        const productTitle = screen.getByText("A new product")
        expect(productTitle).toBeVisible()
    })
    it("should render product price", () => {
        const ProductComponent = render(<ProductItem product={product} />)
        const productPrice = screen.getByText("$205")
        expect(productPrice).toBeVisible()
    })
})
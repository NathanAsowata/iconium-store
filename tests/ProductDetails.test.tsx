import ProductDetails from "../pages/details/[id]"
import {screen, render} from "@testing-library/react"

const productDetails = {
    id: 1,
    title: "A new product",
    price: 950,
    description: " This is a brand new product for sale here",
    category: "Cars",
    image: "/heroImage.png",
    rating: {
      rate: 4.5,
      count: 45
    }
  }


describe("Product Details test suite", () => {
    it("should render product name" , () => {
        const details = render(<ProductDetails productDetails={productDetails}  />)
        const productName = screen.getByText("A new product")
        expect(productName).toBeVisible()
    })
})
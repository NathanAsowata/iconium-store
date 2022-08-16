import Footer from "../components/Footer";
import {screen, render} from "@testing-library/react"

describe("Footer test suite", () => {
    it("should display the footer", () => {
        const footerComponent = render(<Footer />)
        const footerElement = screen.getByTestId("footerSection")
        expect(footerElement).toBeVisible()
    })
})
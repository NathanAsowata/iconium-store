import Navigation from "../components/Navigation";
import {screen, render} from "@testing-library/react"

describe("Navigation test suite", () => {
    it("should display the logo", () => {
        const NavBar = render(<Navigation />)
        const Logo = screen.getByText("Iconium Store")
        expect(Logo).toBeVisible()
    })
    it("should contain the menu", () => {
        const NavBar = render(<Navigation />)
        const navMenu = screen.getByRole("navigation")
        expect(navMenu).toBeInTheDocument()
    })
})
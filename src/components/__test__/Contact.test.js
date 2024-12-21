import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";

import '@testing-library/jest-dom';


describe("Should Render Contact Us Component", () => {
    it("Should the render heading Element", () => {
        render(<ContactUs />)
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();

    })

    it("Should the render Button element", () => {
        render(<ContactUs />)
        const button = screen.getByRole("button");
        //Assertion
        expect(button).toBeInTheDocument();


    })

    it("Should the render Button element", () => {
        render(<ContactUs />)
        const inputElement = screen.getAllByRole("textbox");
        //Assertion

        expect(inputElement.length).toBe(2);


    })

    it("Should the render input Placeholder element", () => {
        render(<ContactUs />)
        const placeholderName = screen.getByPlaceholderText("Name");
        //Assertion

        expect(placeholderName).toBeInTheDocument();


    })
})
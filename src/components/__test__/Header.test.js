import { act, fireEvent, render, renderHook, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'
import useOnlineStatus from "../../utils/useOnlineStatus"


describe("Should Render the HeaderComponent", () => {
    it("Should Check the Login Button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>

                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();

    })

    it("Should Check the Login Button to Logout Button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>

                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const loginButton = screen.getByRole("button", { name: "Login" });
        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole("button", { name: "Logout" });
        expect(logoutButton).toBeInTheDocument();

    })

    it('should be online initially', () => {
        const { result } = renderHook(() => useOnlineStatus());

        expect(result.current).toBe(true);
    });
    it('should be online when offline event is triggered', () => {
        const { result } = renderHook(() => useOnlineStatus());

        act(() => {
            window.dispatchEvent(new Event('offline'));
        });

        expect(result.current).toBe(false);


    });






})
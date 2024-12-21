import { getByText, render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import { restraCardMockData } from "../mocks/restraCardMockData"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'
import { promotedLabelData } from "../mocks/PromotedLabelData"



describe("Should render the Restaurant card", () => {
    it('should render restaurant card data', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantCard restaurantCards={restraCardMockData} />
                </Provider>
            </BrowserRouter>
        )
        const restraCardName = screen.getByRole("heading", { name: "Chinese Wok" });
        expect(restraCardName).toBeInTheDocument();

    })

    const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);

    it("should render the promoted label", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantCardWithPromotedLabel restaurantCards={promotedLabelData} />
                </Provider>
            </BrowserRouter>
        );

        const promotedLabel = screen.getByText("Promoted");

        expect(promotedLabel).toBeInTheDocument();
    });

})
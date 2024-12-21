/** @format */

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {

    const [userName, setUserName] = useState()

    // Make an API call 

    useEffect(() => {
        // Authentication done 
        const data = { name: "Janaki Rao" }
        setUserName(data.name)

    }, [])
    return (
        <div className="app-layout">
            <Provider store={appStore}>

                <UserContext.Provider value={{ loggedinUser: userName, setUserName }}>
                    <Header />

                    <Outlet />
                </UserContext.Provider>

            </Provider>

        </div>


    );
};

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <ContactUs />
                }, {
                    path: '/restaurantmenu/:resId',
                    element: <RestaurantMenu />
                },
                {
                    path: '/cart',
                    element: <Cart />
                }

                , {
                    path: '/grocery',
                    element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
                },
            ],
            errorElement: <Error />
        }
    ]

)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

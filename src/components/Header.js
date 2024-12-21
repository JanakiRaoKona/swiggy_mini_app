import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";




const Header = () => {

    const cartItems = useSelector((store) => store.cart.items)


    const data = useContext(UserContext)


    const [clickLogin, setLogin] = useState(true)

    const onClickLogin = () => {
        setLogin(!clickLogin);
    }

    const onlineStatus = useOnlineStatus()





    return (
        <div className="flex justify-between items-center sm:bg-lime-200 md:bg-orange-600 lg:bg-amber-50 shadow-xl">
            <img
                className="logo w-16 p-2"
                src={LOGO_URL}
            />

            <ul className="flex m-5">
                <li className="ml-4 font-medium font-serif">Online:{onlineStatus === true ? "🟢" : "🔴"}</li>
                <li className="font-serif"><Link to="/" className="ml-4">Home</Link></li>
                <li className="font-serif"><Link to="/about" className="ml-4">About</Link></li>
                <li className="font-serif"><Link to="/contact" className="ml-4">Contact</Link></li>
                <li className="font-serif"><Link to="/grocery" className="ml-4">Grocery</Link></li>
                <li className="ml-4 font-bold"><Link to="/cart" className="ml-4"><div className="flex"><img alt="cart-logo" className="w-6" src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" /><span className="text-md text-white text-right bg-red-500 rounded-2xl ml-3 p-1">{cartItems.length}</span></div></Link></li>
                <div className="ml-4 font-serif h-8 w-20 p-1 text-center text-white rounded-sm bg-emerald-500">
                    <button data-testid="login-button" className="login-button" onClick={onClickLogin}>{clickLogin ? "Login" : "Logout"}</button>
                </div>
                <li className="ml-4 font-serif">{data.loggedinUser}</li>
            </ul>

        </div>
    );
};

export default Header;
import { useDispatch, useSelector } from "react-redux"
import { clearItems } from "../utils/cartSlice"



const Cart = () => {

    const itemCards = useSelector(store => store.cart.items)
    // console.log(itemCards)

    const dispatch = useDispatch()

    const clearCartItems = () => {
        dispatch(clearItems())

    }

    return (
        <div className="text-center mt-5 font-bold text-lg">
            <h1>Cart Items</h1>
            <button className="bg-slate-800 text-white p-2 text-sm mt-2 rounded-lg" onClick={clearCartItems}>Clear cart Items</button>

            <ul className="bg-slate-100 w-6/12 text-center m-auto mb-10 mt-10 p-2">

                {itemCards.map(eachItem =>
                    <li key={eachItem.card.info.id} className="m-5">
                        <div className=" flex justify-between p-5 text-start">










                            <div className="w-3/6">







                                <h3 className="text-xs font-semibold text-slate-600 mb-2">{eachItem.card.info.name}</h3>
                                <h5 className="text-xs text-slate-400 mb-2">₹{eachItem.card.info.price / 100}</h5>
                                <h6 className="text-xs text-slate-400 mb-2">{eachItem.card.info.description}</h6>
                            </div>
                            <div className="text-center">
                                <img
                                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + eachItem.card.info.imageId}
                                    className="w-40 h-40" />
                                <button className="bg-teal-200 rounded-md p-1 text-white font-semibold" onClick={() => handleAddItems(eachItem)} >Add +</button>
                            </div>
                        </div>
                        <hr className="border-2 text-slate-300" />
                    </li>


                )}


            </ul>
        </div>
    )
}

export default Cart
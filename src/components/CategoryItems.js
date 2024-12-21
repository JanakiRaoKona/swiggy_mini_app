import { useDispatch } from "react-redux"
import { addedItems } from "../utils/cartSlice"



const CategoryItems = (props) => {
    const { itemCards } = props

    const dispatch = useDispatch()

    const handleAddItems = (eachItem) => {
        console.log("card check", eachItem);
        dispatch(addedItems(eachItem))

    }

    console.log(itemCards);

    return (
        <ul>

            {itemCards.map(eachItem =>
                <li key={eachItem.card.info.id}>
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
    )
}

export default CategoryItems
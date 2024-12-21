import CategoryItems from "./CategoryItems"
import { useState } from "react"

const RestaurantCategory = (props) => {

    const { categoryItems, showIndex, setShowIndex } = props
    const { title, itemCards } = categoryItems
    console.log("first check", itemCards)

    const handleClick = () => {
        setShowIndex();
    }



    return (
        <div className="flex flex-col m-auto bg-slate-50 w-6/12 p-5 rounded-md">
            <div className="shadow-lg">
                <div className="flex justify-between p-5 cursor-pointer" onClick={handleClick}>
                    <span className="text-sm font-bold">{title}({itemCards.length})</span>
                    <span>⬇️</span>

                </div>
                <div>
                    {showIndex && <CategoryItems itemCards={itemCards} />}
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default RestaurantCategory
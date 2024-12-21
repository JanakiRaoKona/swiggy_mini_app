// import { useEffect, useState } from "react"
import ShimmerUi from "./ShimmerUi"
import { useParams } from "react-router-dom"
import useRestraMenu from "../utils/useRestraMenu"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"



const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(false)

    const { resId } = useParams();

    const restraMenu = useRestraMenu(resId);



    if (restraMenu?.length === 0) {
        return <ShimmerUi />
    }
    const { name, costForTwoMessage, cuisines, avgRating } = restraMenu?.data?.cards[2].card?.card?.info

    // first sample data take only Recomended Items below destructuring
    // const { itemCards } = restraMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    const category = restraMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )


    return (<div className="text-center p-4 mt-5">
        <h1 className="text-lg font-bold">{name}</h1>
        <h4 className="text-xs font-medium  text-slate-400 p-2">{cuisines.join(", ")}</h4>
        <h3 className="text-base font-medium text-slate-900 p-2">Rating: {avgRating}</h3>
        <h3 className="text-sm font-medium text-slate-700 p-2">{costForTwoMessage}</h3>


        {category?.map((eachCategory, index) =>
            // lifting the state up show this is conr=trolled component

            <RestaurantCategory
                key={eachCategory.card.card.title}
                categoryItems={eachCategory.card.card}
                showIndex={showIndex === index}

                setShowIndex={() => {
                    setShowIndex(index)
                }}

            />
        )}

    </div>
    )
}

export default RestaurantMenu
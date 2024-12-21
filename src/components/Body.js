import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";

import { RESTAURANT_CARDS_API } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import ShimmerUi from "./ShimmerUi";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



const Body = () => {

    const { setUserName, loggedinUser } = useContext(UserContext)

    const [restraList, setrestraList] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [filteredRestra, setFilteredRestra] = useState([]);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_CARDS_API);
        const jsonData = await data?.json();
        // optional chaining
        setrestraList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.
            infoWithStyle?.restaurants);
        setFilteredRestra(jsonData?.data?.cards[4]?.card?.card?.gridElements?.
            infoWithStyle?.restaurants)
    }



    const filterButton = () => {
        const filterRestaurantCards = restraList?.filter(eachItem => eachItem.info.avgRating >= 4.5)
        setFilteredRestra(filterRestaurantCards);
    }

    const onChangeSearch = (event) => {
        setSearchText(event.target.value);

    }

    const onClickSearch = () => {
        const searchRestaurant = restraList?.filter(eachItem => eachItem?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))

        setFilteredRestra(searchRestaurant)
    }
    // console.log(restraList)
    // conditional rendering

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>Please connect your internet connection!!</h1>
    }

    return (restraList?.length === 0 ? <ShimmerUi /> :
        <div className="body">
            <div className="m-5 flex">
                <div className="mt-5">
                    <div className="search-input">
                        <input type="text" data-testid="search-input" onChange={onChangeSearch} value={searchText} className="rounded-sm ring-2 ring-slate-300 p-1" />
                        <button onClick={onClickSearch} className="font-light  font-serif h-8 w-20 p-1 text-center ml-2 rounded-sm ring-2 ring-slate-300">Search</button>
                    </div>
                </div>
                <div>
                    <button onClick={filterButton} className="mt-5 ml-5 font-light  font-serif h-8 w-44 p-1 text-center rounded-sm ring-2 ring-slate-300">Top Rated Restaurants</button>
                </div>
            </div>

            <div className="m-5 flex">
                <div className="mt-5">
                    <div className="search-input">
                        <label className="font-light  font-serif h-8 w-20 p-1 text-center ml-2">User Name: </label>

                        <input type="text" className="rounded-sm ring-2 ring-slate-300 p-1" value={loggedinUser} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                </div>

            </div>
            <div className="flex flex-wrap">
                <div className="flex flex-wrap">
                    {filteredRestra?.map((eachItem) =>
                        eachItem?.info?.avgRating > 3 ? <RestaurantCardPromoted key={eachItem.info.id} restaurantCards={eachItem.info} /> : <RestaurantCard key={eachItem.info.id} restaurantCards={eachItem.info} />
                    )}
                </div>

            </div>
        </div>
    );
};

export default Body;
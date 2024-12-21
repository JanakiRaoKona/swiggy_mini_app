import { useContext } from "react";
import { CARD_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const RestaurantCard = (props) => {
    const { loggedinUser } = useContext(UserContext)

    const { restaurantCards } = props;
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, id } = restaurantCards

    return (
        <div data-testid="restra-card">
            <Link to={`/restaurantmenu/${id}`}>
                <div className="w-60 rounded-md m-5 border-solid border-2 bg-slate-50 hover:bg-slate-100">
                    <img
                        className="w-60 p-3 h-52"
                        src={`${CARD_URL}${cloudinaryImageId}`}
                    />
                    <h1 className="font-medium p-2 text-sm">{name}</h1>
                    <h5 className="text-xs p-2">{cuisines.join(', ')}</h5>
                    <h4 className="text-xs p-2">{costForTwo}</h4>
                    <h4 className="text-xs p-2">⭐ {avgRating}</h4>
                    <h4 className="font-bold">{loggedinUser}</h4>
                </div>
            </Link>
        </div>
    );
};



export const withPromotedLabel = (RestaurantCard) => {

    return (props) => {
        return (
            <div>
                <label className="text-white bg-black rounded-md p-2 m-5 text-xs absolute">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}


export default RestaurantCard;
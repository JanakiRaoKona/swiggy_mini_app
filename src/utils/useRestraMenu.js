import { useEffect, useState } from "react"
import { RESTAURANT_MENU } from "./constants"
const useRestraMenu = (resId) => {

    const [restraMenu, setRestraMenu] = useState([])

    useEffect(() => {
        fetchMenu()
    }, [])
    const fetchMenu = async () => {
        const dataMenu = await fetch(RESTAURANT_MENU + resId)
        const jsonData = await dataMenu.json();
        setRestraMenu(jsonData);


    }

    return restraMenu
}

export default useRestraMenu
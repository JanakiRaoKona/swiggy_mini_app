import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const [onlineStaus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", (event) => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", (event) => {

            setOnlineStatus(true);
        });


    }, [])


    return onlineStaus
}

export default useOnlineStatus
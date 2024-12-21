import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


class About extends Component {



    constructor(props) {
        super(props)

    }

    componentDidMount() {

    }


    render() {

        return (
            <div className="user-details">
                <div>
                    loggedinUser:
                    <UserContext.Consumer>
                        {({ loggedinUser }) => <h1 className="font-bold">{loggedinUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <UserClass />
            </div>

        )
    }
}

export default About
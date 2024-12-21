
import { Component } from "react";


class UserClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            details: {
                name: "Default name",
                location: "Default Location",
                company: "use company",
                bio: "User Role"
            }
        }



    }



    componentDidMount() {
        this.fetchData()

    }

    fetchData = async () => {
        const data = await fetch("https://api.github.com/users/JanakiRaoKona");
        const json = await data.json()

        this.setState({ details: json })

    }





    render() {

        const { name, location, bio, company } = this.state.details


        return (
            <div>
                <h2>About:</h2>
                <h2>Name : {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Bio : {bio}</h4>
                <h4>Company: {company}</h4>
            </div>
        )
    }
}

export default UserClass





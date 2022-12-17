import React from "react"

class Adlin extends React.Component {

    character_name = "Adlin"                          // Inside a class we can't declare a variable
    age = 25
    role = "Main"

    render() {
        return <div>
            <h1> Character : {this.character_name} </h1>                 {/* this keyword is used to fetch the data inside the members  */}
            <h1> Age : {this.age} </h1>                                    {/* this keyword is pointing towards current object */}
            <h1> Role : {this.role} </h1>
        </div>
    }
}
export default Adlin
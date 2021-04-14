import React, { Component } from "react"


class Display extends Component {
    render() {
        let list = this.props.entries
        let toDoList = list.map(this.createList)
        return (<ul>{toDoList}</ul>)
    }

    createList(item) {
        return (
            <div>
                <form><input type="checkbox" /></form>
                <li key={item.key}>{item.text}</li>
            </div>
        )
    }

    
}

export default Display
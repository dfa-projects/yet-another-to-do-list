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
                <form><input type="checkbox" onClick={this.checkbox} /></form>
                <li key={item.key}>{item.text}</li>
            </div>
        )
    }

    checkbox(event) {
        let ticked = event.target
        if (ticked.checked) {
            text-decoration: line-through;
        }
    }
}

export default Display
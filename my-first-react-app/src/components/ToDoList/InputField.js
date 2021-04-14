import React, {Component} from 'react'
import initialState from "./initialState.js"

class InputField extends Component{
    constructor(props) {
        super(props);
        this.state = initialState
        this.saver = this.saver.bind(this)
        this.clear = this.clear.bind(this)
        this.displayList = this.displayList.bind(this)
    }

    saver(event) {
        let newItem = {text: this.input.value, key: Date.now()}
        this.setState((previousState) => {return {items: previousState.items.concat(newItem)}})
        this.input.value = ""
        event.preventDefault()
    }

    clear() {
        this.setState(initialState)
    }


    render() {
        return (<div>
            <form onSubmit={this.saver}>
            <input type="text" id="ToDo" ref={(a) => this.input = a}/>
            <button type="submit">Save</button>
            </form>  
            <button type="submit" onClick={this.clear}>clear</button>
            <this.displayList />
            </div>
        
    )}

    displayList() {
        let listOfItems = this.state.items.map((item) => 
            <li key={item.key}>{item.text}</li>
        )
        return (
            <ul>{listOfItems}</ul>
        )
    }
}

export default InputField
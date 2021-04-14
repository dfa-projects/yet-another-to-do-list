import React, { Component } from "react"


class Display extends Component {
    constructor(props){
        super(props);
        this.state = {checked: false, 
            textDecoration: ''};
        this.checked = this.checked.bind(this);
    }
    
    render() {
        return (
        <div>
            <input type="checkbox" onClick={this.checked}/>
            <span key={Date.now()} style={{textDecoration: this.state.textDecoration}}>{this.props.text}</span>
        </div>)
    }

    checked() {
        if(this.state.checked){
            this.setState({checked: false, textDecoration: ''});
        }
        else{
            this.setState({checked: true, textDecoration: 'line-through'})
        }
    }

    
}

export default Display
import React from "react";

class Clock extends React.Component {
    state = {
        date: new Date(),
    };
    componentDidMount(){
        setInterval(() => this.tick(), 1000);
    }

    tick(){
        this.setState({date: new Date()})
    }
    render(){
        return(
            <h1>The time is {this.state.date.toLocaleString()}</h1>
        )
    }
}

export default Clock;
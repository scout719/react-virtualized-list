import * as React from "react";
import * as ReactDOM from "react-dom";
import { VirtualizedList } from "virtualized-list";

class App extends React.Component<{}, { items: number}> {
    
    constructor() {
        super();
        this.state = {
            items: 1000
        };
    }
    
    refresh() {
        this.setState({ 
            items: parseInt((this.refs["itemsCount"] as HTMLInputElement).value)
        });
    }
    
    render() {
        let list: number[] = [];
        for (let i = 1; i <= this.state.items; i++) {
            list.push(i);
        }
        return (
            <div>
                <h1>Virtualized list example</h1>
                <VirtualizedList list={list}/>
                <br/>
                <input ref="itemsCount" placeholder="Number of items" defaultValue={this.state.items + ""} />
                <button onClick={this.refresh.bind(this)}>Refresh</button>
            </div>);
    }
}

ReactDOM.render(React.createElement(App), document.getElementById("container"));
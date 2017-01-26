import * as React from 'react';
import * as ReactDom from 'react-dom';

export var TextInput = React.createClass({
    render: function(): JSX.Element {
        return <div>JSX Input:<input type="text" defaultValue="入力欄"></input></div>
    }
});

export var TextInput2 = React.createClass({
    getInitialState:function():Object {
        return {disptext:'入力欄'}
    },
    handleEvent: function(event):void {
        this.setState({disptext:event.target.value});
    },
    render:function():JSX.Element {
        return (
            <input type="text" onChange={this.handleEvent} value={this.state.disptext} />
        )
    }
})





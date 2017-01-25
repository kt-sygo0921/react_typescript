import * as React from 'react';
import * as ReactDom from 'react-dom';

//3章　JSX
var TextInput = React.createClass({
    render: function(){
        return <div>JSX Input:<input type="text" defaultValue="入力欄"></input></div>
    }
});

ReactDom.render(
    <TextInput />,
    document.getElementById('render_input1')
);

var TextInput2 = React.createClass({
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

ReactDom.render(
    <TextInput2 />,
    document.getElementById('render_input2')
);

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HelloWorld_props, expression_props, color, defAttribute } from './interface/chapter_03';

//3章　JSX



export var HelloWorld = React.createClass<HelloWorld_props, {}>({ //tsxの問題？
    render: function() {
        return (
            <div>
            <h2>Hello, {this.props.name}World</h2>
            <h2>{this.props.num}</h2>
            </div>
        )
    }
})


export var Evaluator = React.createClass<expression_props,{}>({
    getInitialState: function () {
        return {
            expression:this.props.value
        };
    },
    reCalcValue:function(e) {
        if(e.key === "Enter") {
            this.setState({
                expression: e.target.value
            })
        };
    },
    render: function() {
        return <div>
        <input type="text" onKeyPress={this.reCalcValue} />
        <h2>{eval(this.state.expression)}</h2>
        </div>
    }
})


export var RandomColor = React.createClass<color,{}>({
    render: function() {
        console.log(this.props.value)
        return (
            <h2 style={{
                color:
                this.props.value >= 0 ? "green" : "red"
            }}>
            The number is {this.props.value}
            </h2>
        )
    }
})


export var ColoredButton = React.createClass<defAttribute,{}>({
    render: function() {
        return (
            <button {...this.props}>
                {this.props.children}
            </button>
        )
    }
});

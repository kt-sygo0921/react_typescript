import * as React from 'react';
import * as ReactDom from 'react-dom';

//3章　JSX
ReactDom.render(
    <h2 className = 'render_tsx1'>Hello,React World</h2>,
    document.getElementById('render_tsx1')
);

interface HelloWorld_props {
    name:string,
    num: number
}


var HelloWorld = React.createClass<HelloWorld_props, {}>({ //tsxの問題？
    render: function() {
        return (
            <div>
            <h2>Hello, {this.props.name}World</h2>
            <h2>{this.props.num}</h2>
            </div>
        )
    }
})


interface expression_props {
    value:number
}
ReactDom.render(
    <HelloWorld name = "React" num = {10} />,
    document.getElementById('render_tsx2')
)

var Evaluator = React.createClass<expression_props,{}>({
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

ReactDom.render(
    <Evaluator value={555}/>,
    document.getElementById('render_tsx3')
)

interface color {
    value:number
}
var RandomColor = React.createClass<color,{}>({
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

ReactDom.render(
    <RandomColor value={Math.floor(Math.random() * 20) -10} />,
    document.getElementById('render_tsx4')
)


var myAttributes : {
    type: string,
    checked: boolean,
    readOnly: boolean,
    disabled: boolean,
    size: number
}

myAttributes = {
    type:'checkbox',
    checked: true,
    readOnly: true,
    disabled: true,
    size: 8
}

ReactDom.render(
    <p><input {...myAttributes}/>check ME </p>,
    document.getElementById('render_tsx5')
);


interface defAttribute {
    style:{
    color: string,
    backgroundColor: string,
    fontFamily: string,
    fontSize: number
    },
        type: string,
        disabled: boolean
}

var defAttributes = {
    style: {
        color:'A04020',
        backgroundColor: '#90C0A0',
        fontFamily: 'Serif',
        fontSize: 22
    },
    type: "button",
    disabled: false
}



var ColoredButton = React.createClass<defAttribute,{}>({
    render: function() {
        return (
            <button {...this.props}>
                {this.props.children}
            </button>
        )
    }
});

ReactDom.render(
    <ColoredButton {...defAttributes} disabled={true}>Tap Me</ColoredButton>,
    document.getElementById('render_tsx6')
)

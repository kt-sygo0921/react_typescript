import * as React from 'react';
import * as ReactDom from 'react-dom';

//render
ReactDom.render(
    React.DOM.h2({
        style:{
            color:'rgba(255,0,0,0.5)',
            fontSize: '20px',
            fontStyle: 'oblique',
            fontFamily: 'Arial'
        }}, 'Hello World'),
    document.getElementById('render')

)

let HelloWorld: any = React.createClass({
    render: function() {
        return React.DOM.h2(null, 'helloworlddd');
    }
});

//render2
ReactDom.render(
    React.createElement(HelloWorld),
    document.getElementById('render2')
)

//render3
let props: {
    name:string,
    text:string
}
props = {
    name:'react',
    text:'5/4'
}

const HelloProps = React.createClass({
    render: function(){
        return React.DOM.h2(null, 'hello' + this.props.name + 'World');
    }
})

ReactDom.render(
    React.createElement(HelloProps,props),
    document.getElementById('render3')
)

//render4

const Evaluator = React.createClass({
    render:function(){
        return React.DOM.h2(null, eval(this.props.text))
    }
})

ReactDom.render(
    React.createElement(Evaluator,props),
    document.getElementById('render4')
)

//render5
const MultiElement = React.createClass({
    render:function() {
        return React.DOM.div(null,
            React.DOM.h2(null,'First Element'),
            React.DOM.h2(null,'Second Element'),
            React.DOM.h2(null,'Third Element')
        );
    }
})

ReactDom.render(
    React.createElement(MultiElement),
    document.getElementById('render5')
)


//render6
const Input = React.createClass({
    getInitialState: function() {
        return {
            expression:''
        };
    },
    reCalcValue: function(e) {
        if(e.key === 'Enter') {
            this.setState({
                expression: e.target.value
            });
        }
    },
    render:function(){
        return React.DOM.div(null,
        React.DOM.input({
            type:'text',
            onKeyPress: this.reCalcValue
        }),
        React.DOM.h2(null,eval(this.state.expression))
        );
    }
})

ReactDom.render(
    React.createElement(Input),
    document.getElementById('render6')
)

//render7
let LifeCycle_props :{
    default: number
}

LifeCycle_props = {
    default: 0
}
const LifeCycle = React.createClass({
    componentWillMount: function() {
        console.log('componentWillMount:');
    },
    componentDidMount: function() {
        console.log('componentDidMount:');
    },
    componentWillReceiveProps:function(nextProps) {
        console.log('componentWillReceiveProps:',nextProps);
    },
    getInitialState: function() {
        return {
            expression: this.props.default
        }
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        console.log(nextProps,nextState);
        if(confirm("更新OK？")) {
            return true;
        } else {
            return false;
        }
    },
    componentWillUpdate: function(nextProps, nextState) {
        console.log('もう少しで更新されるよ')
    },
    componentDidUpdate: function() {
        console.log('更新されたよ');
    },
    componentWillUnmount: function() {
        console.log('閉じられたっ・・・・')
    },
    reCalc: function(e) {
        if(e.key === 'Enter') {
            this.setState({
                expression: e.target.value
            })
        }
    },
    render: function() {
        return React.DOM.div(null, React.DOM.input({
            type:'text',
            onKeyPress: this.reCalc
        }),
        React.DOM.h2(null,eval(this.state.expression))
        )
    }
})

ReactDom.render(
    React.createElement(LifeCycle,LifeCycle_props),
    document.getElementById('render7')
)

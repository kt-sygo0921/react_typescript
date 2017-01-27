import * as React from 'react';

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

export var RadioButton = React.createClass({
    getInitialState:function() {
        return {selection:'first'}
    },
    handleChange:function(e) {
        console.log(e.target.value);
        this.setState({selection: e.target.value});
    },
    render:function() {
        return (
            <div>どれか1つを選んでください：
                <div>
                    <input type="radio" name="三択" value="first" checked={this.state.selection === 'first'} onChange={this.handleChange} />最初の選択肢
                </div>
                <div>
                    <input type="radio" name="三択" value="second" checked={this.state.selection === 'second'} onChange={this.handleChange} />次の選択肢
                </div>
                <div>
                    <input type="radio" name="三択" value="third" checked={this.state.selection === 'third'} onChange={this.handleChange} />次の選択肢
                </div>
            </div>
    )}
});

export var CheckBox = React.createClass({
    getInitialState:function():Object {
        return {selection:['first']}
    },
    handleChange:function(e):void {
        var selection = this.state.selection;
        var position = selection.indexOf(e.target.value);
        if(e.target.checked) {
            selection.push(e.target.value)
        } else {
            selection.splice(position,1);
        }
        this.setState({selection:selection})
        console.log(this.state.selection);
    },
    render:function():JSX.Element {
        return (
            <div>いくつでも選んでください：
                <div>
                    <input type="checkBox" value="first" checked={this.state.selection.indexOf('first') !== -1} onChange={this.handleChange} />最初の選択
                </div>
                <div>
                    <input type="checkBox" value="second" checked={this.state.selection.indexOf('second') !== -1} onChange={this.handleChange} />最初の選択
                </div>
                <div>
                    <input type="checkBox" value="third" checked={this.state.selection.indexOf('third') !== -1} onChange={this.handleChange} />最初の選択
                </div>
            </div>
        )
    }
})

interface hoge {
    value:string
}

export class CheckBox_class extends React.Component <hoge,any>{
    constructor() {
        super()
    }
    private handleChang(e):void {
        var selection = this.state.selection;
        var position = selection.indexOf(e.target.value);
        if(e.target.checked) {
            selection.push(e.target.value)
        } else {
            selection.splice(position,1);
        }
        this.setState({selection:selection})
        console.log(this.state.selection);
    }
    render() {
        return ()
    }
}

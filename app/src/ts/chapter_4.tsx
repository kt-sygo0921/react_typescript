import * as React from 'react';
import {checkbox2_props,singleselection,multiselection,formsubmit,tableheader, tabledata} from './interface/chapter_04';

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

export class CheckBox_class extends React.Component <any,any>{
    constructor() {
        super()
        this.state = {selection:['first']}
        this.handleChange = this.handleChange.bind(this);
    }
    private handleChange(e):void {
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
    render():JSX.Element {
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
}

export class CheckBox_class2 extends React.Component <checkbox2_props,any>{
    constructor(checkbox2_props) {
        super(checkbox2_props)
        this.state = {selection:checkbox2_props.selection};
        this.handleChange = this.handleChange.bind(this);
    }
    private handleChange(e):void {
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
    render():JSX.Element {
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
}

export class SingleSelection extends React.Component<singleselection,any> {
    constructor(singleselection) {
        super(singleselection);
        this.state = {selection:singleselection.selection};
        this.handleChange = this.handleChange.bind(this);
    }
    private handleChange(e):void {
        console.log(e.target.value);
        this.setState({selection:e.target.value});
    }

    private handleChange2 = (e):void => {
        console.log(e.target.value);
        this.setState({selection:e.target.value});
    }
    public render():JSX.Element {
        return (
            <div>どれか一つを選んでください:
                <select onChange={this.handleChange2} multiple={false} value={this.state.selection}>
                    <option value="first">最初の選択肢</option>
                    <option value="second">次の選択肢</option>
                    <option value="third">最後の選択肢</option>
                </select>
            </div>
        )
    }
}

export class MultiSelection extends React.Component<multiselection,any> {
    constructor(multiselection) {
        super(multiselection);
        this.state = {selection:multiselection.selection};
    }
    private handleChange = (e):void => {
        var selection = this.state.selection;
        var position = selection.indexOf(e.target.value);
        if(position === -1) {
            selection.push(e.value.target);
        } else {
            selection.splice(position,1);
        }
        console.log(e.target.value);

        this.setState({selection:selection});
    }

    public render():JSX.Element {
        return (
            <div>：いくつでもえらんでください
                <select onChange={this.handleChange} multiple = {true} value={this.state.selection} size = {3}>
                    <option value="first">最初の選択肢</option>
                    <option value="second">次の選択肢</option>
                    <option value="third">最後の選択肢</option>
                </select>
            </div>
        )
    }
}

export class FormSubmit extends React.Component<formsubmit,any> {
    constructor(formsubmit) {
        super(formsubmit);
        this.state = {selection:this.props.selection};
    }
    private handleChange = (e):void => {
        var selection = this.state.selection;
        var position = selection.indexOf(e.target.value);
        if(e.target.checked) {
            selection.push(e.target.value)
        } else {
            selection.splice(position,1);
        }
        this.setState({selection:selection});
    }

    private handleSubmit = (e):void => {
        e.preventDefault();
        console.log(this.state.selection.length);
        if(this.state.selection.length < 2) {
            return;
        }
        // console.log(this.state.selection.lenght);
        // console.log('Submitting', this.state.selection);
        this.setState({selection:[]});
    }
    public render():JSX.Element {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="checkBox" value="first" checked={this.state.selection.indexOf('first') !== -1} onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="checkBox" value="second" checked={this.state.selection.indexOf('second') !== -1} onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="checkBox" value="third" checked={this.state.selection.indexOf('third') !== -1} onChange={this.handleChange}/>
                </div>
                <input type="submit" value="決定"/>
            </form>
        )
    }
}

export class SimpleTable extends React.Component<any,any> {
    render():JSX.Element {
        return (
            <table className="regularTable">
                <thead>
                    <tr>
                        <th>名前</th>
                        <th>地域</th>
                        <th>番号</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>山田太郎</td>
                        <td>東京都港区</td>
                        <td>85133321</td>
                    </tr>
                    <tr>
                        <td>鈴木二郎</td>
                        <td>神奈川県横浜市</td>
                        <td>6912312</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}


export class TableHeader extends React.Component<tableheader,any> {
    render():JSX.Element {
        var tableTitles = this.props.title.map((cName,i) => {
            return (
                <th key={i}>{cName}</th>
            )}
        )
        return (
            <thead>
                <tr>
                    {tableTitles}
                </tr>
            </thead>
        )
    }
}

export class DispTable extends React.Component<tabledata,any> {
    render():JSX.Element {
        var tablebody = this.props.data.map((tabledata) => {
            return (
                <tr key={tabledata.id}>
                    <td>{tabledata.name}</td>
                    <td>{tabledata.area}</td>
                    <td>{tabledata.number}</td>
                </tr>
            )}
        )
        console.log(this.props.data);
        return (
            <tbody>
                {tablebody}
            </tbody>
        )
    }
}
export class MultiTable extends React.Component<any,MultiTableProps> {
    render():JSX.Element {
        return (
            <table className="regularTable">
                <TableHeader title={this.props.title} />
                <DispTable data={this.props.data} />
            </table>
        )
    }
}

interface MultiTableProps {
    header: tableheader[];
    body:tabledata[];
}

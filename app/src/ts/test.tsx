import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as chapter03 from './interface/chapter_03';

export var HelloWorld = React.createClass<chapter03.HelloWorld_props, {}>({ //tsxの問題？
    render: function() {
        return (
            <div>
            <h2>Hello, {this.props.name}World</h2>
            <h2>{this.props.num}</h2>
            </div>
        )
    }
})

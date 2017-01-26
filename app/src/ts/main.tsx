import * as React from 'react';
import * as ReactDom from 'react-dom';
import {HelloWorld,Evaluator,RandomColor,ColoredButton} from './chapter_3';
import {TextInput,TextInput2} from './chapter_4';


//chapter03
try {
    ReactDom.render(
        <div>
            <h2 className = 'render_tsx1'>Hello,React World</h2>
        </div>,
        document.getElementById('render_tsx1')
    );

    ReactDom.render(
        <HelloWorld name = "React" num = {10} />,
        document.getElementById('render_tsx2')
    )

    ReactDom.render(
        <Evaluator value={555}/>,
        document.getElementById('render_tsx3')
    )

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

    ReactDom.render(
        <ColoredButton {...defAttributes} disabled={true}>Tap Me</ColoredButton>,
        document.getElementById('render_tsx6')
    )
}
catch(e) {
    console.log('3章は読み込まれていません')
}

//chapter04
try{
    ReactDom.render(
        <TextInput />,
        document.getElementById('render_input1')
    );

    ReactDom.render(
        <TextInput2 />,
        document.getElementById('render_input2')
    );
}
catch(e) {
    console.log('4章は読み込まれていません')
}

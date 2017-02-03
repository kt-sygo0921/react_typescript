import * as React from 'react';
import * as ReactDom from 'react-dom';
import {HelloWorld,Evaluator,RandomColor,ColoredButton} from './chapter_3';
import {TextInput,TextInput2,RadioButton,CheckBox,CheckBox_class,CheckBox_class2,SingleSelection,MultiSelection,FormSubmit,SimpleTable,DispTable,TableHeader,MultiTable} from './chapter_4';

//テストデータ
var tableColumns = ['名前','地域', '番号'];
var tableData = [
    {id:1,name:'山田太郎',area:'東京都港区',number:8513321},
    {id:2,name:'山田あああ',area:'東京都港区',number:8513325}
]


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

    ReactDom.render(
        <RadioButton />,
        document.getElementById('render_input3')
    )
    ReactDom.render(
        <CheckBox_class />,
        document.getElementById('render_input4')
    )
    ReactDom.render(
        <CheckBox_class2  selection={['second', 'third']}/>,
        document.getElementById('render_input5')
    )
    ReactDom.render(
        <SingleSelection selection={'first'} />,
        document.getElementById('render_input6')
    )
    ReactDom.render(
        <MultiSelection selection={['first','second']} />,
        document.getElementById('render_input7')
    )
    ReactDom.render(
        <FormSubmit selection={['first']} />,
        document.getElementById('render_input8')
    )
    ReactDom.render(
        <SimpleTable />,
        document.getElementById('render_table1')
    )
    ReactDom.render(
        <DispTable data={tableData}/>,
        document.getElementById('render_table2')
    )
    ReactDom.render(
        <MultiTable title={tableColumns} data={tableData} />,
        document.getElementById('render_table3')
    )
}
catch(e) {
    console.log('4章は読み込まれていません')
}

//chapter05
try {

}
catch(e) {
    console.log('5章は読み込まれていません')
}

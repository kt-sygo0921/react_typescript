//chapter3
export interface HelloWorld_props {
    name:string,
    num: number
}

export interface expression_props {
    value:number
}

export interface color {
    value:number
}

export interface defAttribute {
    style:{
    color: string,
    backgroundColor: string,
    fontFamily: string,
    fontSize: number
    },
        type: string,
        disabled: boolean
}

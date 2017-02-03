//chapter4
export interface checkbox2_props {
    selection: string[];
}

export interface singleselection {
    selection: string;
}

export interface multiselection {
    selection: string[];
}

export interface formsubmit {
    selection: string[];
}

export interface tableheader {
    title: string[];
}
export interface tabledata{
    data:{
        id:number;
        name:string;
        area:string;
        number:number;
    }[]
}

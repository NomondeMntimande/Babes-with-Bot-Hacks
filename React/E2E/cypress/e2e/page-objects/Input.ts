export class Input{

    //Selectors
    static input = (id: string):string => {return `//input[@id='${id}']`}

    static submitInput = ():string => {return "//input[@type='submit']"}
}
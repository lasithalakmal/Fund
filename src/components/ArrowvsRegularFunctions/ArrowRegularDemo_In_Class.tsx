import {Component} from 'react'

export default class ArrowRegularDemo_In_Class extends Component{

    world:any = {
        a:40,
        user : {
            a:20,
            arrow:()=>{
                console.log(this.a);
            },
            normal:function(){
                console.log(this.a);
            }
        }
    }

    constructor(props:any){
        super(props);
    }

    a:number = 10;

    arrowFunction = ()=>{
       // console.log('Arrow Functions 1 '+this.a)
       // console.log('Arrow Functions 2'+this.a)
    }

    regularFunction(){
       // console.log("Regular Functions 1 "+this.a);
       // console.log("Regular Functions 2 "+arguments.length);
    }

    render(){
        //function arrowFunction(){}
        this.arrowFunction();
        this.regularFunction();
        this.world.user.arrow();
        this.world.user.normal();
        
        const arrow = new this.arrowFunction();
        const regular = new this.regularFunction();

        console.log(arrow.prototype)
        console.log(regular.prototype)

        return null;
    }

}
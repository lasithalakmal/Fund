import { Text } from "react-native";

function* genFunction(num:number[]){
    yield num.length;
    let tot = 0;
    for(let i =0; i < num.length;i++){
        tot+=num[i]
    }
    yield tot;
}

const gen = genFunction([1,2,3,4,5]);

export default function GeneratorFunctions(){
    console.log(gen.next().value)
    console.log(gen.next().value)
    return(
        <Text></Text>
    );
}
export function Say(x:number){
    if(x%3 === 0 || x%5 ===0 ){
        if(x%3 === 0){
            return "fizz"
        }else if(x%5 ===0){
            return "buzz"
        }else if(x%3 === 0 && x%5 === 0){
            return "fizz buzz"
        }
    }
return x
}
let start:number=69;
let end:number=65;
const Hello = () =>{

    for(let i:number=start;i>=end;i--){
        for(let j:number=1;j<=5;j++){
            let newArray:string=String.fromCharCode(i);
            document.write(`${newArray}`)
        }
        document.write("<br>")
    }





}
Hello()
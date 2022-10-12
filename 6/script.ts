let start:number=65;
let end:number=69;
const Hello = () =>{

    for(let i:number=start;i<=end;i++){
        for(let j:number=1;j<=5;j++){
            let newArray:string=String.fromCharCode(i);
            document.write(`${newArray}`)
        }
        document.write("<br>")
    }





}
Hello()
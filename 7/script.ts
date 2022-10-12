let start:number=65;
let end:number=69;
const Hello = () =>{
    for(let i:number=1;i<=5;i++){
        for(let j:number=start;j<=end;j++){
            let newNumber:string=String.fromCharCode(j);
            document.write(newNumber)
        }
        document.write("<br>")
    }





}
Hello()
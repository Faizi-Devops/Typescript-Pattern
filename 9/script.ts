
const Hello =() =>{
    for(let i:number=1;i<=5;i++){
        for(let j:number=69;j>=65;j--){
            let newNum:string=String.fromCharCode(j);
            document.write(`${newNum}`)
        }
        document.write("<br>")
    }





}
Hello()

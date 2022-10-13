const Hello = () =>{
    for(let i:number=65;i<=69;i++){
        for(let j:number=65;j<=i;j++){
            let newNum:string=String.fromCharCode(i);
            document.write(`${newNum}`);
        }
        document.write("<br>")
    }





}
Hello()
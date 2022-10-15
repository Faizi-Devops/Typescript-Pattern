const Hello = () =>{
    for(let i:number=1;i<=5;i++){
        for(let j:number=1;j<=6-i;j++){
            let newNum:string=String.fromCharCode(70-i);
            document.write(`${newNum}`)
        }
        document.write("<br>")
    }




}
Hello()
const Hello = () =>{
    for(let i:number=1;i<=5;i++){
        for(let j:number=1;j<=6-i;j++){
            let newNum:string=String.fromCharCode(i+64);
            document.write(`${newNum}`)
        }
        document.write("<br>")
    }






}
Hello()
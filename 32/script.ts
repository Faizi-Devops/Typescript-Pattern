const Hello = () =>{
    for(let i:number=1;i<=5;i++){
        for(let j:number=1;j<=5-i;j++){
            document.write("&nbsp&nbsp")
        }
        for(let k:number=1;k<=i;k++){
            let newNum:string=String.fromCharCode(64+i);
            document.write(newNum + "&nbsp")
        }
        document.write("<br>")
    }







}
Hello()
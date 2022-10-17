const Hello = () =>{
    for(let i:number=1;i<=5;i++){
        for(let j:number=1;j<=5-i;j++){
            document.write("&nbsp&nbsp")
        }
        for(let k:number=1;k<=i;k++){
            document.write(i + "&nbsp")
        }
        document.write("<br>")
    }







}
Hello()
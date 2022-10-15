const Hello = () =>{
    for(let i:number=1;i<=5;i++){
        for(let j:number=4;j>=i;j--){
            document.write("&nbsp&nbsp")
        }
        for(let k:number=1;k<=i;k++){
            document.write("*" +"&nbsp&nbsp")
        }
        document.write("<br>")
    }








}
Hello()
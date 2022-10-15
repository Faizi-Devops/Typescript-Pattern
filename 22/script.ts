const Hello = () =>{
    for(let i:number=5;i<=1;i--){
        for(let j:number=1;j>=i;j++){
            let newNum:string=String.fromCharCode(70-j)
            document.write(newNum)

        }
        document.write("<br>")
    }







}
Hello()
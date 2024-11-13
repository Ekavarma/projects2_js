let icon=document.querySelector("i")
let p1=document.querySelector("p")

 icon.onclick=function (){
    if(icon.className ==="fa-solid fa-toggle-on"){
        icon.className ="fa-solid fa-toggle-off"
        document.body.style.backgroundColor="green"
        document.body.style.color="white"
    }else{
        icon.className="fa-solid fa-toggle-on"
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
    }
       
    
}
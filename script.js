let body = document.querySelector("body") ;
body.addEventListener("click",point) ;
let clientX ;
let clientY ;
function point() {
    let x = window.innerWidth ;
    let y = window.innerHeight ;
    clientX = Math.floor(Math.random() * (x-10)) + 1;
    clientY =  Math.floor(Math.random() * (y-10)) + 1 ;
    console.log(clientX,clientY);
    let div = document.createElement("div") ;
    div.classList.add("div") ;
    console.log(div);
    div.setAttribute("style","top:"+clientY+"px;left:"+clientX+"px;position:absolute;") ;
    body.appendChild(div) ;
}
setInterval(point,5) ;
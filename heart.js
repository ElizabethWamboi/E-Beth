const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove",(event) => {
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    
    const spanElement = document.createElement("span");
    spanElement.style.left = xpos + "px"
    spanElement.style.top = ypos + "px" 

    const size = Math.random()*100;
    spanElement.style.width = size +"px"
    spanElement.style.height = size + "px"
    bodyElement.appendChild(spanElement);
    setTimeout(() => {
        spanElement.remove()
    },3000)
})
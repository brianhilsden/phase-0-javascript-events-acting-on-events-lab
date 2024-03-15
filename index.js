// Your code here
const dodger=document.getElementById("dodger")


function moveDodgerLeft(){
    const left=dodger.style.left.replace("px","")
    const leftInt=parseInt(left,10)
    if (leftInt>0){
        dodger.style.left=`${leftInt-1}px`}

}
function moveDodgerRight(){
    const left=dodger.style.left.replace("px","")
    const leftInt=parseInt(left,10)
    if (leftInt<360){
        dodger.style.left=`${leftInt+1}px`
    }

}
document.addEventListener("keydown",function(e){
    if(e.key==="ArrowLeft"){
        moveDodgerLeft()
        
    }
    else if(e.key==="ArrowRight"){
        moveDodgerRight()
        
        
    }
    }
    )

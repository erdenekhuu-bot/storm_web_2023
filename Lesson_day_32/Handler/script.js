let state={
    counter: 0,
}
function incrementCounter(){
    state.counter+=1;
    updateUI()
}
function updateUI(){
    const counterElement=document.getElementById("counter");
    counterElement.textContent=state.counter;
}
document.getElementById('incrementButton').addEventListener("click",incrementCounter)

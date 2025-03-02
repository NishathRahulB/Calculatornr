let input=document.querySelector("input")
function addvalue(elementvalue){
    input.value+=elementvalue;
}
function clearvalue(){
    input.value="";
}
function deletevalue(){
    input.value=input.value.slice(0,input.value.length-1);
}
function evaluatevalue(){
    input.value=eval(input.value);
}
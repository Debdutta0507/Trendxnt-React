const res =document.getElementById('res');
let op1=op2=op3='';
 addzero=function(value)
{
    if(op2!='')
    op3=op3+value;
    else
    op1=op1+value;
    renderResult();
}
addone=function(value)
{
    if(op2!='')
    op3=op3+value;
    else
    op1=op1+value;
    renderResult();
}
function renderResult(){
    res.innerHTML=op1+op2+op3;
}
function yoo (){
    console.log("hhghg")
    op1=op2=op3='';
   
    renderResult();
}
function addplus(){
    op2='+';
    renderResult();

}
function addminus(){
    op2='-';
    renderResult();

}
function addmul(){
    op2='*';
    renderResult();

}
function adddiv(){
    op2='/';
    renderResult();

}
function equal(){
    var z1=parseInt(op1,2);
    var z2=parseInt(op3,2);
    switch(op2){
        case '+':
             op1=op1+op3;
              break;
        case '-':
            op1=op1-op3;
            break;
        case '*':
            op1=op1*op3;
            break;
        case '/':
            op1=op1/op3; 
            break;

    }
    op1=parseInt(op1).toString(2);
    op2=op3=''
    renderResult();
}
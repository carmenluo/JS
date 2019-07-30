/*When I use CreateElement i could not apply css to the button because it loads css file first*/
  var myButton=document.getElementById('btn');

var num=0;

myButton.addEventListener('click',e=>{
    num+=1;
    myButton.innerHTML=num;
});
document.body.appendChild(myButton);
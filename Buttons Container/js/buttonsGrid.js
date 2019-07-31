//getElementsByClassName return HTML Collection is array-like objects similar to arguments. so that we can change that to array first
var btns=Array.from(document.getElementsByClassName("buttonClass"));
let nums=[1,2,3,6,9,8,7,4];
const ids=[1,2,3,6,9,8,7,4];

let btn5=document.getElementById("btn5");

btn5.addEventListener("click",function() {
    btns.forEach(element => {
        if (element.innerHTML=="5"){
            element.innerHTML="po";
        }
    });
    //pop remove the last element of array, push add new item to the array
    //unshift add new item at the beginning
    nums.unshift(nums.pop());
    for (i=0; i<=7; i++) {
        document.getElementById("btn"+ids[i]).innerHTML=nums[i];
    }
});
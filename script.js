var a = document.querySelector("#one")
var butt = document.querySelector("button")
var  flag = 0;
butt.addEventListener("click",function(){
 
   if(flag == 0){
      for(var i = 0; i<1; i++) {
         a[i].style.backgroundColor = "green";  
      }
      flag = 1;
   }
   else{
      for(var i = 0; i<1; i++) {
         a[i].style.backgroundColor = "red";  
      }
   
    flag = 0;
   }
})
console.log("shudias")
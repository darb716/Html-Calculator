function dis(val) 
 { 
     document.getElementById("current").value+=val 
 } 
   
 function solve() 
 { 
     let x = document.getElementById("current").value 
     let y = eval(x) 
     document.getElementById("current").value = y 
 } 
   
 function clr() 
 { 
     document.getElementById("current").value = "" 
 } 
document.getElementById("roll").style.cursor = "grab";
document.querySelector("#roll").addEventListener("click",roll1)
function roll1(){
   var randNum =  Math.floor(Math.random() * 6) + 1;
   var randNum1 =  Math.floor(Math.random() * 6) + 1;
   var randNum2 =  Math.floor(Math.random() * 6) + 1;
     //  if(randNum>0 || randNum1>0 || randNum2>0){
       document.querySelector("#status").textContent=randNum;
       document.querySelector("#status1").textContent=randNum1;
       document.querySelector("#status2").textContent=randNum2;
     // }
      var max=0;
     max=Math.max(randNum, randNum1, randNum2);
     if(randNum===randNum1 && randNum===randNum2 && randNum1===randNum2){
       document.getElementById("member-1").style.background = "#3f00ff";
       document.getElementById("member-2").style.background = "#3f00ff";
       document.getElementById("member-3").style.background = "#3f00ff";
       
     }
     //else if(randNum>randNum1){
       // document.getElementById("winner").textContent = max; 

        if(randNum===max && randNum1===max ){
         document.getElementById("winner1").textContent="Member A & Member B";
         document.getElementById("member-1").style.background="blue";
         document.getElementById("member-2").style.background="blue";
         document.getElementById("member-3").style.background="red";

       }
       else if(randNum1===max && randNum2===max ){
         document.getElementById("winner1").textContent="Member B & Member C";
         document.getElementById("member-1").style.background="red";
         document.getElementById("member-2").style.background="blue";
         document.getElementById("member-3").style.background="blue";

       }
       else if(randNum==max && randNum2==max ){
         document.getElementById("winner1").textContent="Member A & Member C";
         document.getElementById("member-1").style.background="blue";
         document.getElementById("member-2").style.background="red";
         document.getElementById("member-3").style.background="blue";

       }
       else if(randNum===max){
         document.getElementById("winner1").textContent="Member A";
         document.getElementById("member-1").style.background="green";
         if(randNum1>randNum2){
          document.getElementById("member-2").style.background="yellow";
         document.getElementById("member-3").style.background="red";
         }
         else{
           document.getElementById("member-2").style.background="red";
           document.getElementById("member-3").style.background="yellow";
         }
       }
       else if(randNum1===max){
         document.getElementById("winner1").textContent="Member B";
         document.getElementById("member-2").style.background="green";
         if(randNum>randNum2){
          document.getElementById("member-1").style.background="yellow";
          document.getElementById("member-3").style.background="red";
         }
         else{
           document.getElementById("member-1").style.background="red";
           document.getElementById("member-3").style.background="yellow";
         }
         
       }
       else if(randNum2===max){
         document.getElementById("winner1").textContent="Member C";
         document.getElementById("member-3").style.background="green";
         if(randNum>randNum1){
          document.getElementById("member-1").style.background="yellow";
          document.getElementById("member-2").style.background="red";
         }
         else{
           document.getElementById("member-1").style.background="red";
           document.getElementById("member-2").style.background="yellow";
         }
       }
       else if(randNum==max && randNum1==max && randNum2==max ){
         document.getElementById("winner1").textContent="Match Tie!";
         document.getElementById("member-1").style.background="blue";
          document.getElementById("member-2").style.background="blue";
          document.getElementById("member-1").style.background="blue";
       }
     }
playerone_name = localStorage.getItem("playerone_name");
playertwo_name = localStorage.getItem("playertwo_name");

document.getElementById("playerone_name").innerHTML=playerone_name+':';
document.getElementById("playertwo_name").innerHTML=playertwo_name+':';

playerone_score= 0;
playertwo_score = 0;

document.getElementById("playerone_score").innerHTML=playerone_score;
document.getElementById("playertwo_score").innerHTML=playertwo_score;

function Send(){
gettheword= document.getElementById('THETEXT').value;
woard= gettheword.toLowerCase();
console.log(woard);
cat1= woard.charAt(1);
console.log(cat1+"haloo");
halfwoard=Math.floor(word.length/2);
cat2= woard.charAt(halfwoard);
console.log(cat2);
lastwoard= word.length-1;
cat3=woard.charAt(lastwoard);
removecat1=woard.replace(cat1,'_');
removecat2=removecat1.replace(cat2,'_');
removecat3=removecat2.replace(cat3,'_');
question='<h4 id="display">Q. '+removecat3+'</h4>';
answer='<br> answer:<input id="answerbox">';
check='<br> <br> <button class="btn btn-info" onclick="Check()">Check</button>';
Row= question+answer+check;
document.getElementById("Output").innerHTML= Row ;
document.getElementById("THETEXT").value="";



}





function AddUserDoSomething(){
playerone_name= document.getElementById("Input_player_1").value;
playertwo_name= document.getElementById("Input_player_2").value;
localStorage.setItem("playerone_name",playerone_name);
localStorage.setItem("playertwo_name",playertwo_name);

window.location="Game_play.html";
}
var scores = [0, 0];
var title = document.querySelector("h1");
function randomDice(player)
{
    var rand = Math.floor(Math.random(0,5)*6)+ 1;
    var imageName = "images/dice" + rand; 
    document.getElementsByClassName("img" + player)[0].src = imageName + ".png";
    return rand;
}    
for (let index = 0; index < scores.length; index++) {
    scores[index] = randomDice(index+1);
}
console.log(scores);
if(scores[0] > scores[1])
{
    title.innerHTML = "Player1 Wins!";
}
else if(scores[1] > scores[0])
{
    title.innerHTML = "Player2 Wins!";
}
else
{
    title.innerHTML = "draw";
}

var randomdice1=Math.floor(Math.random()*6)+1;
var randomdice2=Math.floor(Math.random()*6)+1;

var randomDiceImage="dice"+randomdice1+".png";
var ImageSource="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];

var randomDiceImage2="dice"+randomdice2+".png";
var ImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];


image1.setAttribute("src",ImageSource);
image2.setAttribute("src",ImageSource2);
if (randomdice1>randomdice2){
    document.querySelector("h1").innerHTML="Player One Wins";
}
else if(randomdice1<randomdice2){
    document.querySelector("h1").innerHTML="Player Two Wins";
    
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
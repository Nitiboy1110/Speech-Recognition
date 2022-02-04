x = 0;
y = 0;

draw_cir="";
draw_rect="";

var SpeechRecognition= window.webkitSpeechRecognition;
var reco = new SpeechRecognition;

function start(){
    document.getElementById("status").innerHTML = 'System is listening, please speak';
    reco.start();
}

reco.onresult = function(event){
console.log(event);
var content = event.results[0][0].transcript;
console.log(content);
document.getElementById("status").innerHTML = 'The speech is recognised as: '+ content;
if(content == 'circle'){
     x = Math.floor(Math.random() * 900);
     y = Math.floor(Math.random() * 600);
document.getElementById("status").innerHTML = 'started drawing circle'
draw_cir='set';
}
if(content == 'rectangle'){
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
document.getElementById("status").innerHTML = 'started drawing rectangle'
draw_rect='set';
}
}

function setup(){
    canvas = createCanvas(900,600)
}

function draw(){
    if(draw_cir=='set'){
        radius = Math.floor(Math.random() * 150);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = 'drawn circle';
        draw_cir="";
    }

    if(draw_rect=='set'){
        rect(x,y,200,250);
        document.getElementById("status").innerHTML = 'drawn rectangle';
        draw_rect="";
    }
}
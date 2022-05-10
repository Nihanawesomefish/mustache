nosex=0;
nosey=0;
function preLoad(){
clown_nose = loadImage("https://i.postimg.cc/cJnBn8BL/1-15421-mustache-printable-mustache.jpg");
}
function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,400,400);
//stroke("red");
//fill("orange");
//circle(nosex,nosey, 20);
//image(clown_nose,nosex,nosey, 30,30);
}
function takeSnapshot(){
save('pic.png');
}
function modelLoaded(){
console.log("posenet is loaded")
}
function gotPoses(results){
console.log(results);
if(results.length>0){
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("nosex="+results[0].pose.nose.x);
console.log("nosey="+results[0].pose.nose.y);
}
}
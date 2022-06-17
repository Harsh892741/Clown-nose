NoseX = 0;
NoseY = 0;
function preload(){
    ClownNose = loadImage('https://i.postimg.cc/y882byHC/clown-nose.jpg');
}

function setup(){
    Canvas = createCanvas(300, 300);
    Canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(ClownNose, NoseX, NoseY, 30, 30);
}

function takeSnapshot(){
    save('Image.png');
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
     NoseX = results[0].pose.nose.x;
     NoseY = results[0].pose.nose.y;
}
}
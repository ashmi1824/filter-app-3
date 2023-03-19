function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function takeSnapshot(){
    save('jokerNose.png');

}
function draw(){
    image(video,0,0,300,300);
    fill (255,0,0);
    stroke (255,0,0);
   
    image(clown_nose, noseX -50, noseY -10 , 100, 40);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX =results[0].pose.nose.x;
        noseY =results[0].pose.nose.y;   
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
        

    }
}
noseX = 0;
noseY = 0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/3xXdC1nV/moustaches1.png');
}



difference = 0;
rightWristx = 0;
leftWristx = 0;

function setup() {
    video = createCapture(VIDEO);
    vide.size(550, 150);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPosses);
}

function modelLoaded() {
    console.log('poseNet is Initialized');
}

function gotPosses(results) {
    if(results.lenght > 0) {
        console.log(results);
        
        leftWristx = results[0].pose.leftWristx.x;
        rightWristx = results[0].pose.rightWristx.x;
        difference = floor(leftWristx - rightWristx);
        console.log("rightwristx = "+ rightWristx +"leftwristx = "+ leftWristx +"difference = "+ difference);
    }
}
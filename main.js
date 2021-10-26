leftWristX = 0
rightWristX = 0
diffrence = 0

function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)

    canvas = createCanvas(550, 500)
    canvas.position(560, 100)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {

    console.log("modelLoaded")

}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
       leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        diffrence = floor(leftWristX - rightWristX);


    }
}


function draw() {

    background("cyan")
    document.getElementById("square_side").innerHTML = "Font Size will be = " + diffrence + "px";
    fill('#F90093');
    textSize(diffrence);
    text('Evan', 50, 400);


}
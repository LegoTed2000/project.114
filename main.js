function preload() {

}

function setup() {
    canvas = createCanvas(700, 700);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(700 , 700);
    video.hide();
    poseNet = ml5.poseNet(video , modelloaded);
    poseNet.on("pose", gotposes) 
}

function draw() {
    image(video, 0, 0, 700, 700);
}

function take_snapshot() {
    save('Mustash.png');
}

function modelloaded() {
    console.log("MODEL HAS LOADED YAAAAAAYYYYYYYY!!!!")
}

function gotposes(resuts) {
    if(resuts.length > 0) {
        console.log(resuts);
        console.log("The nose x = " + results[0].pose.nose.x);
        console.log("The nose y = " + results[0].pose.nose.y);
    }
} 
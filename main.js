MouthX = 0;
MouthY = 0;

function preload() {
    mustash = loadImage("https://i.postimg.cc/3RxxsdZN/LTdj-Ljr-Xc.png");
}

function setup() {
    canvas = createCanvas(700, 700);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(700, 700);
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotposes)
}

function draw() {
    image(video, 0, 0, 700, 700);
    image(mustash, MouthX -35, MouthY +5, 80, 40);
}

function take_snapshot() {
    save('Mustash.png');
}

function modelloaded() {
    console.log("MODEL HAS LOADED YAAAAAAYYYYYYYY!!!!")
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        MouthX = results[0].pose.nose.x;
        MouthY = results[0].pose.nose.y;
        console.log("The mouth x = " + results[0].pose.nose.x);
        console.log("The mouth y = " + results[0].pose.nose.y);
    }
} 
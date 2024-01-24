function preload() {
    
}

function setup() {
   canvas = createCanvas(800, 480);
   canvas.position(100, 200);
   video = createCapture(VIDEO);
   video.hide();
}

function draw() {
    image(video, 400, 100, 300, 300);

    fill(61, 224, 104);
    stroke(66, 135, 245);
    rect(392, 100, 15, 300);

    fill(61, 224, 104);
    stroke(66, 135, 245);
    rect(392, 100, 300, 15);    

    fill(61, 224, 104);
    stroke(66, 135, 245);
    rect(692, 100, 15, 300);    

    fill(61, 224, 104);
    stroke(66, 135, 245);
    rect(400, 400, 300, 15); 

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(400, 100, 30);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(400, 400, 30);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(700, 100, 30);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(700, 400, 30);


}
function take_snapshot() {
    save("myImage.png");
}
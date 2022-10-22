function preload(){

}
function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 640, 480);
    fill("red");
    stroke("red");
    circle(30, 30, 50);
    circle(600, 30, 50);
    circle(30, 450, 50);
    circle(600, 450, 50);
    fill("green");
    stroke("green");
    rect(50, 430, 530, 40);
    rect(50, 10, 530, 40);
    rect(10, 50, 40, 380);
    rect(580, 50, 40, 380)
}
function take_snapshot()
{
    save('mysistersBirthday.png');
}
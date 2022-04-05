noseX=0;
noseY=0;

function preload()
{
    mustache=loadImage('https://i.postimg.cc/jjmxJdX7/moustache-PNG38.png');
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
image(0,0,300,300);
image(mustache,noseX,noseY,50,50);
}
function take_snapshot()
{
    save('filteredImage.png');
}
function modelLoaded()
{
    console.log('pose net is initialized');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x= "+noseX);
        console.log("nose y= "+noseY);
    }
}
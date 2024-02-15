noseX = 0;
noseY = 0;


function preload()
{
    lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}

function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}  

function modelLoaded()
{
    console.log("Model loaded!")
}

function draw()
{
    image(video, 0, 0, 350, 350);
    image(lipstick, noseX, noseY, 50, 50);
}

function gotPoses(results)
{
    if (results.length > 0) 
    {
        console.log(results);
        noseX = results[0].pose.nose.x-25;
        noseY = results[0].pose.nose.y+12;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function takeSnapshot()
{
    save('myFilterImage.png');
}
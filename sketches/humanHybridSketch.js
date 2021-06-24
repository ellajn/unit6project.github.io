//Declare variables:
let video;
let poseNet;
let poses = [];
let nose;
let leftEye;
let rightEye;
let leftEar;
let rightEar;
let leftShoulder;
let rightShoulder;
let leftWrist;
let rightWrist;
let leftElbow;
let rightElbow;
let leftKnee;
let rightKnee;
let leftAnkle;
let rightAnkle;
let leftHip;
let rightHip;
let torso;

//Preload images for collage creator://Preload images:
function preload() {
  noseImage = loadImage('assets/hybrid/nose.png');
  
  rightEyeImage = loadImage('assets/hybrid/leftEye.png');
  leftEyeImage = loadImage('assets/hybrid/rightEye.png');
  
  leftEarImage = loadImage('assets/hybrid/rightEar.png');
  rightEarImage = loadImage('assets/hybrid/leftEar.png');
  
  leftShoulderImage = loadImage('assets/hybrid/rightShoulder.png');
  rightShoulderImage = loadImage('assets/hybrid/leftShoulder.png');
  
  leftWristImage = loadImage('assets/hybrid/rightWrist.png');
  rightWristImage = loadImage('assets/hybrid/leftWrist.png');
  
  leftElbowImage = loadImage('assets/hybrid/leftElbow.png');
  rightElbowImage = loadImage('assets/hybrid/rightElbow.png');
  
  leftKneeImage = loadImage('assets/hybrid/rightKnee.png');
  rightKneeImage = loadImage('assets/hybrid/leftKnee.png');
 
  leftAnkleImage = loadImage('assets/hybrid/rightAnkle.png');
  rightAnkleImage = loadImage('assets/hybrid/leftAnkle.png');
  
  rightHipImage = loadImage('assets/hybrid/leftHip.png');
  leftHipImage = loadImage('assets/hybrid/rightHip.png');
  
  torsoImage = loadImage('assets/hybrid/torso.png')
}

//setup environment for posenet

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  //video.size(width, height);
  video.hide()

  //create a new poseNet method with a
  //this calls poseNet from ml5.js single detection
  poseNet = ml5.poseNet(video, modelReady);

  //this sets up an envent that fills the global variable "poses"
  //with an array every time new poses are detected
  poseNet.on("pose", function(results) {
  poses = results;
    
  frameRate(10);
  });
}

// to let us know the model is ready
function modelReady() {
  console.log("Model Loaded");
}

function draw() {
  
  //draw collages
  image(video, 0, 0, width, height);
  
  background(20, 100);
  // bg=color(100);
  // bg.setAlpha(10);
  
   tint(200, 50);
  poseImages();
   
}

function poseImages() {

  //if the confidence score is more than zero, the image will showageMode(CENTER);
  if (poses.length > 0) {
    let pose = poses[0].pose;
    

    //image(preloaded images, x.axis, y.axiwheight)
    let rightEye = pose.rightEye;
    image(rightEyeImage, rightEye.x, rightEye.y, 60, 60);

    let leftEye = pose.leftEye;
    image(leftEyeImage, leftEye.x, leftEye.y, 60, 60);

    let nose = pose.nose;
    image(noseImage, nose.x, nose.y, 60, 60);
    
    let leftEar = pose.leftEar;
    image(leftEarImage, leftEar.x, leftEar.y, 50, 70);

    let rightEar = pose.rightEar;
    image(rightEarImage, rightEar.x, rightEar.y, 50, 70);

    let leftShoulder = pose.leftShoulder;
    image(leftShoulderImage, leftShoulder.x, leftShoulder.y, 80, 80);

    let rightShoulder = pose.rightShoulder;
    image(rightShoulderImage, rightShoulder.x, rightShoulder.y, 80, 80);
    
    let leftHip = pose.leftHip;
    image(leftHipImage, leftHip.x, leftHip.y, 80, 80);
    
    let rightHip = pose.rightHip;
    image(rightHipImage, rightHip.x, rightHip.y, 80, 80);
    
    let torso = pose.torso;
    image(torsoImage, (leftShoulder.x + rightShoulder.x)/2, (leftShoulder.y + rightShoulder.y)/1.4, 150, 150);
    
    let leftWrist = pose.leftWrist;
    image(leftWristImage, leftWrist.x, leftWrist.y, 90, 90);

    let rightWrist = pose.rightWrist;
    image(rightWristImage, rightWrist.x, rightWrist.y, 90, 90);

    let leftElbow = pose.leftElbow;
    image(leftElbowImage, leftElbow.x, leftElbow.y, 70, 70);

    let rightElbow = pose.rightElbow;
    image(rightElbowImage, rightElbow.x, rightElbow.y, 70, 70);

    let leftKnee = pose.leftKnee;
    image(leftKneeImage, leftKnee.x, leftKnee.y, 80, 80);

    let rightKnee = pose.rightKnee;
    image(rightKneeImage, rightKnee.x, rightKnee.y, 80, 80);

    let leftAnkle = pose.leftAnkle;
    image(leftAnkleImage, leftAnkle.x, leftAnkle.y, 90, 90);

    let rightAnkle = pose.rightAnkle;
    image(rightAnkleImage, rightAnkle.x, rightAnkle.y, 90, 90);
  }

}

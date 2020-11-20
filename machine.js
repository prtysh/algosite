var classifier;
var video;
var detections = [];
console.log('ml5 version:', ml5.version);

function preload(){
  // classifier = ml5.imageClassifier('MobileNet',video, modelLoaded);
  classifier = ml5.objectDetector('cocossd');
}

function setup() {
  createCanvas(340, 240);
  video = createCapture(VIDEO);
  video.size(340, 240);
  classifier.detect(video, gotDetections);
  // console.log(classifier);
  video.hide();
  // classifier.predict(gotDetections);

}

function draw() {
  background(200);
  image(video,0,0);
  for (let i =0; i < detections.length; i++){
    let obj = detections[i];
    fill(0);
    stroke(0);
    text(detections[i].label, 10, 10);
    // text(detections[i].confidence, 10, 20);
    if(detections[i].label == 'person'){
      let distance = detections[i].confidence * height;
      // console.log(distance);
      line(0,distance,width,distance);
    }
    // console.log(detections[i].label);
  }
}
// Initialize the Image Classifier method with MobileNet


// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
  console.log("model Ready!")
  status = true;
  console.log('Detecting')

  // cocoSsd.detect(img, gotResult);
}

function gotDetections(error, results){
  if (error) {
    console.error(error);
  }
  // console.log(results);
  detections = results;
  classifier.detect(video, gotDetections);
}

// Make a prediction with a selected image
// classifier.classify(document.getElementById('image'), (err, results) => {
//   console.log(results);
// });

Webcam.set({
    dest_width: 340,
    dest_height: 260,
    image_format: 'png',
    png_quality: 91
});
camera = document.getElementById("camera");
Webcam.attach(camera);
function takePhoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML ="<img id='taken_photo' src="+data_uri+">";
    })
}
console.log('ml5 version', ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/R9gcWKiPh/model.json', modelLoaded);
function modelLoaded(){
    console.log("model successfully loaded")
}
function checkImage(){
picture = document.getElementById("taken_photo");
classifier.classify(picture, gotResults);
}
function gotResults(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("guess_1").innerHTML=result[0].label;
        document.getElementById("guess_2").innerHTML=result[1].label;
    }
}
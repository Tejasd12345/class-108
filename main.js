//https://teachablemachine.withgoogle.com/models/Jfkpm0C8X/

function sc()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Jfkpm0C8X/model.json', modelReady);
}

function modelReady() {
classifier.classify(gotResults);
console.log("model is loaded by tejas");
}

function gotResults(error, results) {
   if (error) {
      console.error(error) ;
   } else{
 console.log(results);
 red = Math.floor(Math.random() * 255)+ 1;
 green = Math.floor(Math.random() * 255)+ 1;
 blue = Math.floor(Math.random() * 255)+ 1;

document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
document.getElementById("result_accuracy").innerHTML = 'Accuracy - '+( results[0].confidence*100).toFixed(2)+" % ";
document.getElementById("result_label").style.color = "rgb("+red+","+green+","+blue+")";
document.getElementById("result_accuracy").style.color = "rgb("+red+","+green+","+blue+")";


 img1 = document.getElementById('alien_1');
 img2 = document.getElementById('alien_2');
 img3 = document.getElementById('alien_3');
 img4 = document.getElementById('alien_4');

 if (results[0].label == "claping") {
  img1.src='aliens-01.gif';
  img2.src='aliens-02.png';
  img3.src='aliens-03.png';
  img4.src='aliens-04.png';
 }
 else if (results[0].label == "drum") {
    img1.src='aliens-01.png';
    img2.src='aliens-02.gif';
    img3.src='aliens-03.png';
    img4.src='aliens-04.png';
   }
   else if (results[0].label == "shouting") {
    img1.src='aliens-01.png';
    img2.src='aliens-02.png';
    img3.src='aliens-03.gif';
    img4.src='aliens-04.png';
   }
   else {
    img1.src='aliens-01.png';
    img2.src='aliens-02.png';
    img3.src='aliens-03.png';
    img4.src='aliens-04.gif';
   }
   }
}
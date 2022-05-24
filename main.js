
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lA9fwAC1l/model.json",modelready);
}
function modelready(){
    classifier.classify(gotresult);
}
function gotresult(error, result){
    console.log(gotresult);
}
if(error){
    console.log(error);
}
else{
    console.log(result);
    random_number_red=Math.floor(Math.random()*255)+1;
    random_number_green=Math.floor(Math.random()*255)+1;
    random_number_blue=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML="I can hear - "+ result[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy - "+ (result[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_number_red+","+random_number_green+","+random_number_blue+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_red+","+random_number_green+","+random_number_blue+")";
    var img1=document.getElementById("animal1");
    var img2=document.getElementById("animal2");
    var img3=document.getElementById("animal3");
    var img4=document.getElementById("animal4");
    if(result[0].label=="Roar"){
        img1.src="lion.gif";
        img2.src="aliens-02.png";
        img3.src="aliens-03.png";
        img4.src="aliens-04.png";
    }
    else if(result[0].label=="Bark"){
        img1.src="aliens-01.png";
        img2.src="barking-dogs-barking.gif";
        img3.src="aliens-03.png";
        img4.src="aliens-04.png"; 
    }
    else if(result[0].label=="Meow"){
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="cat.gif";
        img4.src="aliens-04.png"; 
    }
    else{
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="aliens-03.png";
        img4.src="cow-mooo.gif"; 
    }
}

function Comenzar(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/amJzVHURY/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);

        img1=document.getElementById('animal1');
        img2=document.getElementById('animal2');
        img3=document.getElementById('animal3');
        img4=document.getElementById('animal4');

      if(results[0].label == "Gallo")
      {
        img1.src='gallo.gif';
        img2.src='Gato.png';
        img3.src='Perro.png';
        img4.src='Vaca.png';
     
      }  
      else if(results[0].label == "Gato")
      {
        img1.src='gallo.png';
        img2.src='Gato.gif';
        img3.src='Perro.png';
        img4.src='Vaca.png';
     
      }

      else if(results[0].label == "Perro")
      {
        img1.src='gallo.png';
        img2.src='Gato.png';
        img3.src='Perro.gif';
        img4.src='Vaca.png';
     
      }

      else if(results[0].label == "Vaca")
      {
        img1.src='gallo.png';
        img2.src='Gato.png';
        img3.src='Perro.png';
        img4.src='Vaca.gif';
     
      }
    }
}
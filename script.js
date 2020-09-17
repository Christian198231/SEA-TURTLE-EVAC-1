function payDecline(){
    alert('Sorry, due to this being a foe website I will not allow you to enter your credit card information. Sorry for the inconvience.');
}

function payDecline2(){
    alert('Sorry, due to this being a foe website I will not allow you to enter your credit card information. Sorry for the inconvience.');
}

function amount(){
    alert('Donation amount added');
}

// SlideShow

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500); 
}

// FAQS

var showing = false;

function ans1(){
    if(!showing){
        showing = true;
        document.getElementById('text-ans-1').style.display = 'block';
    }
    else{
        showing = false;
        document.getElementById('text-ans-1').style.display = 'none';
    }
}

function ans2(){
    if(!showing){
        showing = true;
        document.getElementById('text-ans-2').style.display = 'block';
    }
    else{
        showing = false;
        document.getElementById('text-ans-2').style.display = 'none';
    }
}

function ans3(){
    if(!showing){
        showing = true;
        document.getElementById('text-ans-3').style.display = 'block';
    }
    else{
        showing = false;
        document.getElementById('text-ans-3').style.display = 'none';
    }
}

function ans4(){
    if(!showing){
        showing = true;
        document.getElementById('text-ans-4').style.display = 'block';
    }
    else{
        showing = false;
        document.getElementById('text-ans-4').style.display = 'none';
    }
}

function ans5(){
    if(!showing){
        showing = true;
        document.getElementById('text-ans-5').style.display = 'block';
    }
    else{
        showing = false;
        document.getElementById('text-ans-5').style.display = 'none';
    }
}

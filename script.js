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
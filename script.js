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

// FAQ Dropdown
$("#q1").click(function() {
    if ($("#ans1").is(":hidden")) {
        $("#ans1").slideDown("slow");
    } else {
        $("#ans1").slideUp("slow");
    };
});
$("#q2").click(function() {
    if ($("#ans2").is(":hidden")) {
        $("#ans2").slideDown("slow");
    } else {
        $("#ans2").slideUp("slow");
    };
});
$("#q3").click(function() {
    if ($("#ans3").is(":hidden")) {
        $("#ans3").slideDown("slow");
    } else {
        $("#ans3").slideUp("slow");
    };
});
$("#q4").click(function() {
    if ($("#ans4").is(":hidden")) {
        $("#ans4").slideDown("slow");
    } else {
        $("#ans4").slideUp("slow");
    };
});
$("#q5").click(function() {
    if ($("#ans5").is(":hidden")) {
        $("#ans5").slideDown("slow");
    } else {
        $("#ans5").slideUp("slow");
    };
});
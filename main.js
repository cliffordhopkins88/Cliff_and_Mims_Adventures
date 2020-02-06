let colours = ["#ffffff", "#f2f2f2", "#e6e6e6"," #d9d9d9", "#cccccc", "#bfbfbf","#b3b3b3", "#a6a6a6","#999999","#8c8c8c","#808080","#737373","#666666","#595959","#4d4d4d","#404040", "#333333","#262626","#0d0d0d","#000000"];

function changeColour(i){
    document.body.style.background = colours[i];
    //console.log(`function 1 ${colours[i]}`);
    
    if(i<colours.length){
    setTimeout(function(){
        i++;
        changeColour(i);
    },500);
}
}
//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// When the user clicks on the drop down nav bar it navigates to different places on page.
function contactNav() {

  var contact = document.getElementById("topBtn");
  contact.scrollIntoView();
  
}

function elChorro1Nav() {
  var elChorroPt1 =  document.getElementById("elChorroPt1");
  elChorroPt1.scrollIntoView();
}

function elChorro2Nav() {

  var elChorroPt2 =  document.getElementById("elChorroPt2");
  elChorroPt2.scrollIntoView();

}


  function madridNav() {
    var madrid =  document.getElementById("madrid");
    madrid.scrollIntoView();
  }
 
 function malagaNav() {
  var malaga =  document.getElementById("malaga");
  malaga.scrollIntoView();
}


  var parentsPlace =  document.getElementById("parentsPlace");
  parentsPlace.scrollIntoView();

  function sydneyNav() {
  var sydney =  document.getElementById("sydney");
  sydney.scrollIntoView();
  }

  function bluiesNav() {
  var bluies =  document.getElementById("bluies");
  bluies.scrollIntoView();
  }


changeColour(0);


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {

   
    x.className += " responsive";
    console.log("responsive now");
  } else {
    x.className = "topnav";
    console.log("top nav now");
  }
}
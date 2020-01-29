let colours = ["#ffffff", "#f2f2f2", "#e6e6e6"," #d9d9d9", "#cccccc", "#bfbfbf","#b3b3b3", "#a6a6a6","#999999","#8c8c8c","#808080","#737373","#666666","#595959","#4d4d4d","#404040", "#333333","#262626","#0d0d0d","#000000"];

function changeColour(i){
    document.body.style.background = colours[i];
    console.log(`function 1 ${colours[i]}`);
    
    if(i<colours.length){
    setTimeout(function(){
        i++;
        changeColour(i);
    },500);
}
}
//Get the button:
mybutton = document.getElementById("myBtn");

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

changeColour(0);

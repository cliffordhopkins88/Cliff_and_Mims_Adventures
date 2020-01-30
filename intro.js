function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
    console.log(x);
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
    console.log(images(i));
}

function startTimer() {
    setInterval(displayNextImage, 800);
}

var images = [
    
    
    "/Users/cliffhopkins/Documents/GitHub/Cliff_and_Mims_Adventures/images/lookingPink.jpg",
    "/Users/cliffhopkins/Documents/GitHub/Cliff_and_Mims_Adventures/images/bluies2019.jpg",
    "/Users/cliffhopkins/Documents/GitHub/Cliff_and_Mims_Adventures/images/BondiView.jpg",
    "/Users/cliffhopkins/Documents/GitHub/Cliff_and_Mims_Adventures/images/onMimsBalcony.jpg",
    "/Users/cliffhopkins/Documents/GitHub/Cliff_and_Mims_Adventures/images/christmasDay.jpg",
    "/Users/cliffhopkins/Documents/GitHub/Cliff_and_Mims_Adventures/images/christmasDay2.jpg"
], x=-1;

startTimer();
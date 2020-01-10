let colours = ["#f5f5f0", "#ebebe0", "#e0e0d1", "#d6d6c2", "#ccccb3", 
"#c2c2a3", "#b8b894", "#adad85", "#a3a375", "#999966", "#8a8a5c", "#7a7a52", "#7a7a52",
"#8a8a5c","#999966", "#a3a375", "#adad85", "#b8b894", "#c2c2a3", "#ccccb3", "#d6d6c2",  
"#e0e0d1", "#ebebe0", "#f5f5f0"];

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

changeColour(0);

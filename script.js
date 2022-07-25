

var gridSize = prompt("Enter Grid Size")

for(let i = 0; i<gridSize; i++){
    var div = document.createElement('div');
        div.setAttribute('class' ,'grid');

        
        for(let j = 0; j<gridSize;j++){
        
        

        let pixel = document.createElement('div');
        pixel.setAttribute('class' ,'pixel')
        // pixel.setAttribute('style' , "height:20px;width:20px;border:2px solid black;display:flex;")
        
        div.appendChild(pixel);
        let mainGrid = document.getElementById("mainGrid")
        mainGrid.appendChild(div)

        

    }

    let mainbody = document.getElementById("container")
    mainbody.appendChild(mainGrid)
    
    
}

var selectedPixel = document.querySelectorAll(".pixel")
var colorButton = document.getElementById("favcolor");
var color = document.getElementById("favcolor").value;

colorButton.addEventListener("click", () =>{
    

    for(let k = 0;k<selectedPixel.length; k++){
    
        selectedPixel[k].addEventListener('click', () =>{
            let selected = selectedPixel[k];
            
            
            // selected.setAttribute("style" , "background-color : '"+color+"';")
            selected.style.backgroundColor =  document.getElementById("favcolor").value;
             
           
        } )
        
    
    }
})







let eraser = document.getElementById("eraser");
eraser.addEventListener('click', () =>{

    for(let k = 0;k<selectedPixel.length; k++){
    
        selectedPixel[k].addEventListener('click', () =>{
            let selected = selectedPixel[k];
            
            
            // selected.setAttribute("style" , "background-color : '"+color+"';")
            selected.style.backgroundColor =  "white"
             
           
        } )
        
    
    }

 })  



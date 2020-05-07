function Randomcolor(){
    var letters = "0123456789ABCDEF"; 

    var color = '#'; 

         for (var i = 0; i < 3 ; i++){ 
         color += letters[(Math.floor(Math.random() * 7))]; 
         document.body.style.background = color;
         }
  }
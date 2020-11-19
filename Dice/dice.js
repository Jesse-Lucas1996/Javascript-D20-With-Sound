var sound1 = new Audio('Anime wow sound effect.mp3');
var sound2 = new Audio('It was at this moment that HE he knew he fcked up. SOUND EFFECT.mp3');

var dice = {
    d20: 20,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.d20) + 1;
 
      if(randomNumber == 20)
      {
      sound1.play();
      }
      if(randomNumber == 1)
      {
          sound2.play();
      }     
      return randomNumber;
    }
   
  }


  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  
  }

  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };


  
  
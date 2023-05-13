// Define an array of letters
let united = ['Fred', 'Martinez', 'Luke', 'Aaron', 'Jones', 'Harry', 'Marcus', 'Mason', 'Antony', 'Bruno', 'Casemiro', 'Jadon'];

// header text random 
const randomIndex = Math.floor(Math.random() * united.length);
const randomLetter = united[randomIndex];
document.getElementById('word').innerHTML = 'Word:' + " " +  randomLetter;

      // total point
      let total = document.getElementById('total-point')
      let point = 3; 
      total.innerHTML = "Life Point:" + point;

      // click loop
for (let i = 0; i < button.length; i++) {
          button[i].addEventListener('click', function() {
            
document.getElementById('word').innerHTML = 'Word:' + " " +  randomLetter;
            button[i].innerHTML = united[i];

          if (randomLetter == united[i]){
              alert("CONGRATULATION YOU HAVE WON THE GAME. THE GAME WILL RESTART IN 2 SECONDS!")
              setTimeout(function() {
                location.reload();
              }, 2000);
              
            } else{ 
                    point --; total.innerHTML = 'Life Point:'+ ' ' + point;
            }

            if(point < 0){
              point = 0;
              total.innerHTML = 'Life Point:'+ ' ' +  point
              alert('TRY AGAIN, THE GAME WILL RESTART IN 2 SECONDS!')
              setTimeout(function() {
                location.reload();
              }, 2000);
            }
          }

          
      )};
            // cards mixedArray

      function mixedArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const n = Math.floor(Math.random() * (i + 1));
          [array[i], array[n]] = [array[n], array[i]];
        }
        return array;
      }
      const mixedButton = mixedArray(united);

      // instruction

      document.getElementById('showInstructions').addEventListener('click', function() {
        let instructionList = document.getElementById('instructionList');
        if (instructionList.style.display === 'none') {
          instructionList.style.display = 'block';
          document.getElementById('showInstructions').innerHTML = 'Click here to hide instructions';
        } else {
          instructionList.style.display = 'none';
          document.getElementById('showInstructions').innerHTML = 'Click here to show instructions';
        }
      });
      
     



var button = document.getElementById('button');
var textContainer = document.getElementById('textContainer');

var button2 = document.getElementById('button2');
var textContainer2 = document.getElementById('textContainer2');

var button3 =document.getElementById('button3');
var textContainer3 = document.getElementById('textContainer3')

var button4 =document.getElementById('button4');
var textContainer4 = document.getElementById('textContainer4');


button.addEventListener('click', function() {
  
    if (textContainer.style.display === 'none' || textContainer.style.display === '') {
      textContainer.style.display = 'block'; 
      setTimeout(function() {
        textContainer.classList.add('visible');
      }, 10);
    } else {
      textContainer.classList.remove('visible');
      setTimeout(function() {
        textContainer.style.display = 'none';
      }, 700); 
    }
  });
  
  

  button2.addEventListener('click', function() {
    if (textContainer2.style.display === 'none' || textContainer2.style.display === '') {
      textContainer2.style.display = 'block';
      setTimeout(function() {
        textContainer2.classList.add('visible');
      }, 10);
    } else {
      textContainer2.classList.remove('visible');
      setTimeout(function() {
        textContainer2.style.display = 'none';
      }, 700); 
    }
  });


  button3.addEventListener('click', function() {
    if( textContainer3.style.display == 'none' || textContainer3.style.display === '') {
        textContainer3.style.display = 'block';
        setTimeout(function() {
          textContainer3.classList.add('visible');
        }, 10);
      } else {
        textContainer3.classList.remove('visible');
        setTimeout(function() {
          textContainer3.style.display = 'none';
        }, 700); 
      }
    });

    button4.addEventListener('click', function() {
        if( textContainer4.style.display == 'none' || textContainer4.style.display === '') {
            textContainer4.style.display = 'block';
            setTimeout(function() {
              textContainer4.classList.add('visible');
            }, 10);
          } else {
            textContainer4.classList.remove('visible');
            setTimeout(function() {
              textContainer4.style.display = 'none';
            }, 700); 
          }
        });

        document.getElementById('linkedin').addEventListener('click', function() {
          window.open('https://www.linkedin.com/in/monique-vallejo18', '_blank');
      });

      document.getElementById('github').addEventListener('click', function() {
          window.open('https://github.com/monique-vallejo', '_blank');
      });
      
const imgID = document.getElementById("img-1");
const containerBackground = document.getElementById("container");

const buttonOne = document.getElementById("1");
const buttonTwo = document.getElementById("2");
const buttonThree = document.getElementById("3");

var buttonOneCount = 1;
var buttonTwoCount = 1;
var buttonThreeCount = 1;

function imgChange(id){
    switch(id) {
        case 1:
          buttonOne.innerHTML = buttonOneCount++
          imgID.src = "images/1.jpg";
          containerBackground.style.backgroundImage="url(images/bg1.jpg)";
          break;
        case 2:
          buttonTwo.innerHTML = buttonTwoCount++
          imgID.src = "images/2.jpg";
          containerBackground.style.backgroundImage="url(images/bg2.jpg)";
          break;
        case 3:
          buttonThree.innerHTML = buttonThreeCount++
          imgID.src = "images/3.jpg";
          containerBackground.style.backgroundImage="url(images/bg3.jpg)";
            break;
        default:

        break;
      }
}


function enable(id){
  switch(id) {
      case 1:
        buttonOne.disabled = true;
        buttonTwo.disabled = false;
        buttonThree.disabled = false;
        break;
      case 2:
        buttonOne.disabled = false
        buttonTwo.disabled = true;
        buttonThree.disabled = false;
        break;
      case 3:
        buttonOne.disabled = false;
        buttonTwo.disabled = false;
        buttonThree.disabled = true;
          break;
      default:

      break;
    }
}





document.getElementById("todaysSpecialDealCloseButton").addEventListener("click", function(event){
  event.preventDefault();
  this.parentElement.classList.add('hide');
});

document.getElementById("newsletterSignupCloseButton").addEventListener("click", function(event){
  event.preventDefault();
  this.parentElement.classList.add('hide');
});

// carousel one - five column carousel
let ULelement = document.getElementById('sortedDeals').children[1].children[1];
let arrowButtonsContainerElement = document.getElementById('sortedDeals').children[1].children[0];
let carouselStartingPosition = 1;
let styleLeftRight = -20;
var lastMoveWas = null;
// hide left arrow on page load. This part is for the 5 column carousel at the top
arrowButtonsContainerElement.getElementsByClassName('left')[0].style.display = 'none';
moveLeft2 = () => {
  styleLeftRight = styleLeftRight + 20;
  ULelement.style.left = styleLeftRight + '%';
  lastMoveWas = 'left';
}
moveLeft = () => {
  if (carouselStartingPosition !== 1) {
    arrowButtonsContainerElement.getElementsByClassName('right')[0].style.display = 'block';
    if (lastMoveWas == 'right') {
      moveLeft2();
    }
    moveLeft2();
    carouselStartingPosition -= 1;
    if (carouselStartingPosition == 1) {
      arrowButtonsContainerElement.getElementsByClassName('left')[0].style.display = 'none';
    }
  }
}
moveRight2 = () => {
  ULelement.style.left = styleLeftRight + '%';
  styleLeftRight = styleLeftRight - 20;
  lastMoveWas = 'right';
}
moveRight = () => {
  if (carouselStartingPosition !== (ULelement.getElementsByTagName('li').length - 4)) {
    if (lastMoveWas == 'left') {
      moveRight2();
    }
    moveRight2();
    if (carouselStartingPosition == 1) {
      arrowButtonsContainerElement.getElementsByClassName('left')[0].style.display = 'block';
    }
    carouselStartingPosition += 1;
  } 
  if (carouselStartingPosition == (ULelement.getElementsByTagName('li').length - 4)) {
    arrowButtonsContainerElement.getElementsByClassName('right')[0].style.display = 'none';
  }
}


// carousel two - four column carousel
let ULelement2 = document.getElementById('luxurySuites').children[1].children[1];
let arrowButtonsContainerElement2 = document.getElementById('luxurySuites').children[1].children[0];
let fourColumnCarouselStartingPosition = 1;
let fourColumnCarouselStyleLeftRight = -25;
var fourColumnCarouselLastMoveWas = null;
// hide left arrow on page load. This part is for the 4 column carousel at the top.
arrowButtonsContainerElement2.getElementsByClassName('left')[0].style.display = 'none';
carouselTwoMoveLeft2 = () => {
  fourColumnCarouselStyleLeftRight = fourColumnCarouselStyleLeftRight + 25;
  ULelement2.style.left = fourColumnCarouselStyleLeftRight + '%';
  fourColumnCarouselLastMoveWas = 'left';
}
carouselTwoMoveLeft = () => {
  if (fourColumnCarouselStartingPosition !== 1) {
    arrowButtonsContainerElement2.getElementsByClassName('right')[0].style.display = 'block';
    if (fourColumnCarouselLastMoveWas == 'right') {
      carouselTwoMoveLeft2();
    }
    carouselTwoMoveLeft2();
    fourColumnCarouselStartingPosition -= 1;
    if (fourColumnCarouselStartingPosition == 1) {
      arrowButtonsContainerElement2.getElementsByClassName('left')[0].style.display = 'none';
    }
  }
}
carouselTwoMoveRight2 = () => {
  ULelement2.style.left = fourColumnCarouselStyleLeftRight + '%';
  fourColumnCarouselStyleLeftRight = fourColumnCarouselStyleLeftRight - 25;
  fourColumnCarouselLastMoveWas = 'right';
}
carouselTwoMoveRight = () => {
  if (fourColumnCarouselStartingPosition !== (ULelement2.getElementsByTagName('li').length - 3)) {
    if (fourColumnCarouselLastMoveWas == 'left') {
      carouselTwoMoveRight2();
    }
    carouselTwoMoveRight2();
    if (fourColumnCarouselStartingPosition == 1) {
      arrowButtonsContainerElement2.getElementsByClassName('left')[0].style.display = 'block';
    }
    fourColumnCarouselStartingPosition += 1;
  } 
  if (fourColumnCarouselStartingPosition == (ULelement2.getElementsByTagName('li').length - 3)) {
    arrowButtonsContainerElement2.getElementsByClassName('right')[0].style.display = 'none';
  }
}
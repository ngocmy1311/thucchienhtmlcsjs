var animationElements = document.querySelectorAll('.show-on-scroll');

function toggleAnimationElementInWindow(element){
    console.log(element);
    var rect = element.getBoundingClientRect(); 
    var heightScreen = window.innerHeight; 
    // check if element is in the viewport
    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
        element.classList.add('start'); 
    } else {
        element.classList.remove('start');
    }
}

function checkAnimation(){
    animationElements.forEach(el => {
        toggleAnimationElementInWindow(el);
    });
}

window.onscroll = checkAnimation;

// Initial check to see if any elements are in view on page load
checkAnimation();

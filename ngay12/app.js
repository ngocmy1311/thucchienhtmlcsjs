var range = document.querySelector('.range'); 
var process = document.querySelector('.process'); 
var value = document.querySelector('.process span'); 

function updateProcess(percent) { // Accept 'percent' as a parameter
    process.style.width = `${percent}%`;
    value.innerText = `${percent}%`;
}

range.addEventListener('mousemove', function(e) {
    var processWidth = e.pageX - this.offsetLeft;
    var percent = processWidth / this.offsetWidth * 100;
    percent = Math.round(percent);
    updateProcess(percent); // Pass 'percent' to the function
});

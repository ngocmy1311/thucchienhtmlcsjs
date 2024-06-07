var container = document.querySelector('.container');
for(let i = 0; i < 200; i++ ){
    var square = document.createElement('div'); 
    square.classList.add('square'); 
    container.appendChild(square); 
    square.addEventListener('mouseenter', (e) => {
        e.currentTarget.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    })
    square.addEventListener('mouseleave', (e)=>{
        e.currentTarget.style.backgroundColor = 'aqua'; 
    })
    
}

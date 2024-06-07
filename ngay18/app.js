var boxes = document.querySelectorAll('.box'); 
var target = document.querySelector('.target'); 
target.addEventListener('dragstart', function(e){
    this.classList.add('dragging')
})
target.addEventListener('dragend', function(e){
    this.classList.remove('dragging')
})
boxes.forEach(box=> {
    box.addEventListener('dragover', function(e){
        e.preventDefault(); 
        this.appendChild(target);

    })
    box.addEventListener('drop', function(e){
        this.appendChild(target);
    })
})
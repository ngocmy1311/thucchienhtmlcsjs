var images = document.querySelectorAll('.image img');
console.log(images); 
var prev = document.querySelector('.prev'); 
console.log(prev);
var next = document.querySelector('.next'); 
var close = document.querySelector('.close'); 
var galleryimg = document.querySelector('.gallery__inner img'); 
console.log(galleryimg);
var gallery = document.querySelector('.gallery');
var currentIndex = 0;
console.log(gallery); 
function showGallery(){
    galleryimg.src = images[currentIndex].src;
    gallery.classList.add('show'); 
    if(currentIndex === 0){
        prev.classList.add('hide');
    }else{
        prev.classList.remove('hide');
    
    }
    if(currentIndex === images.length - 1){
        next.classList.add('hide');
    }else{
        next.classList.remove('hide');
    
    }
    
}
images.forEach((item, index)=>{
    item.addEventListener('click', function(){
        currentIndex = index;
        showGallery();
    })
})
close.addEventListener('click', function(){
    gallery.classList.remove('show'); 
})
document.addEventListener('keydown', function(e){
    if(e.key === 27){
        gallery.classList.remove('show'); 
    }
})
prev.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--;
        showGallery(); 
    }
})
next.addEventListener('click', function(){
    if(currentIndex < images.length - 1){
        currentIndex++;
        showGallery(); 
    }
})
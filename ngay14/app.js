var imgFeature = document.querySelector('.img-feature'); 
var listImg = document.querySelectorAll('.list-image img'); 
var prevBtn = document.querySelector('.prev'); 
var nextBtn = document.querySelector('.next'); 
var currentIndex = 0; 

function updateImageByIndex(index){
    document.querySelectorAll('.list-image div').forEach(item=>{
        item.classList.remove('active');
    })
    currentIndex = index;
    imgFeature.src = listImg[index].getAttribute('src');
    listImg[index].parentElement.classList.add('active'); 
}

listImg.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        updateImageByIndex(index)
    }) 
})

var imgFeature = document.querySelector('.img-feature'); 
var listImg = document.querySelectorAll('.list-image img'); 
var prevBtn = document.querySelector('.prev'); 
var nextBtn = document.querySelector('.next'); 
var currentIndex = 0; 

function updateImageByIndex(index){
    document.querySelectorAll('.list-image div').forEach(item=>{
        item.classList.remove('active');
    })
    currentIndex = index;
    imgFeature.classList.remove('active'); // remove active class to start transition
    imgFeature.src = listImg[index].getAttribute('src');
    setTimeout(() => imgFeature.classList.add('active'), 50); // delay before adding active class
    listImg[index].parentElement.classList.add('active'); 
}

listImg.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        updateImageByIndex(index)
    }) 
})

prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
        updateImageByIndex(--currentIndex);
    }
});

nextBtn.addEventListener('click', function() {
    if (currentIndex < listImg.length - 1) {
        updateImageByIndex(++currentIndex);
    }
});

updateImageByIndex(currentIndex);

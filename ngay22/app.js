var imgList = document.querySelectorAll('img'); 
var container = document.querySelector('.container');
var btnList = document.querySelectorAll('button');
var arr = []; 
// init data
imgList.forEach(item=>{
    arr.push({
        src : item.src, 
        type : item.dataset.type
    })
})
btnList.forEach(btn => {
    btn.addEventListener('click', e => {
        let type = e.currentTarget.dataset.type;
        let filterData = arr.filter(food => {
            return food.type == type
        })
        render(filterData);
    })
});

console.log(arr);
function render(list){
    container.innerHTML = ' '; 
    list.forEach(item => {
        let imgElement = document.createElement('img');
        imgElement.src = item.src;
        imgElement.dataset.type = item.type;
        container.appendChild(imgElement);
    })
}




// var btnList = document.querySelectorAll('button'); 
// var imgList = document.querySelectorAll('img');

// btnList.forEach(btn => {
//     btn.addEventListener('click', e => {
//         let type = e.currentTarget.dataset.type;
//         imgList.forEach(img => {
//             let foodType = img.dataset.type;
//             if (type === 'all' || type === foodType) {
//                 img.classList.remove('hide');
//             } else {
//                 img.classList.add('hide');
//             }
//         });
//     });
// });

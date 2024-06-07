var fb = document.querySelector('.facebook h2'); 
var yb = document.querySelector('.youtube h2'); 
var tiktok = document.querySelector('.tiktok h2'); 
function count(el, to){
    var count = 0; 
    let counting = setInterval(()=> {
        count += to/100;
        if(count > to){
            clearInterval(counting);
            el.innerText = to; 
        }else{
            el.innerText = count; 
        }
    }, 1); 
}
count(fb, 3300);
count(yb, 1000);
count(tiktok, 2000);
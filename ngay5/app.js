var btnsearch = document.querySelector('.search-box__btn');
btnsearch.addEventListener('click',function(){
         this.parentElement.classList.toggle('open');
         this.previousElementSibling.focus();

    })
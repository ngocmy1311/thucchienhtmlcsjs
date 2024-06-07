var btnopen = document.querySelector('.open-modal-btn');
console.log(btnopen);
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
console.log(iconClose);
var btnClose = document.querySelector('.modal__footer button'); // Thêm dấu chấm trước modal_footer button

function toggleModal(){
    modal.classList.toggle('hide');
}

btnopen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
modal.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
        toggleModal();
    }
});


// Lựa chọn các phần tử DOM
const eKey = document.querySelector('.card.key p:last-child');
const eLocation = document.querySelector('.card.location p:last-child');
const eWhich = document.querySelector('.card.which p:last-child');
const eCode = document.querySelector('.card.code p:last-child');
const alertElement = document.querySelector('.alert');
console.log(alertElement);
const boxElement = document.querySelector('.box');
console.log(boxElement);

// Hàm xử lý sự kiện keydown
function handleKeyDown(event) {
    // Cập nhật nội dung của các phần tử DOM
    eKey.innerText = event.key;
    eLocation.innerText = event.location;
    eWhich.innerText = event.which;
    eCode.innerText = event.code;

    // Ẩn alert và hiện box
    alertElement.classList.add('hide');
    boxElement.classList.remove('hide');
}

// Gắn sự kiện keydown vào document
document.addEventListener('keydown', handleKeyDown);

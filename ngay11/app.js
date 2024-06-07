var btnSuccess = document.querySelector('.control .success'); 
var btnWarning = document.querySelector('.control .warning'); 
var btnError = document.querySelector('.control .error'); 
btnSuccess.addEventListener('click',function(){
    createToast('success')
})
btnWarning.addEventListener('click',function(){
    createToast('warning')
})
btnError.addEventListener('click',function(){
    createToast('error')
})
function createToast(status){
    // <div class="toast warning">
    //         <i class='bx bx-alarm-exclamation'></i>
    //         <span class="message">This is Warning message</span>
    //         <span class="countdown"></span>
    //     </div>
    //     <div class="toast error">
    //         <i class='bx bx-error'></i>
    //         <span class="message">This is Error message</span>
    //         <span class="countdown"></span>
    //     </div>
    //     <div class="toast success">
    //         <i class='bx bxs-chevron-down-square'></i>
    //         <span class="message">This is Success message</span>
    //         <span class="countdown"></span>
    //     </div>
    let template = `       <i class='bx bxs-chevron-down-square'></i>
          <span class="message">This is Success message</span>`
    switch(status){
        case 'success':
            template = `<i class='bx bxs-chevron-down-square'></i>
            <span class="message">This is Success message</span>`
            break; 
        case 'warning':
            template = `<i class='bx bx-alarm-exclamation'></i>
                    <span class="message">This is Warning message</span>`
            break;
        case 'error':
            template = `<i class='bx bx-error'></i>
                   <span class="message">This is Error message</span>`
            break;
    
    }
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(status);
    toast.innerHTML = `${template}
    
    <span class="countdown"></span>`; 
    var toastList = document.getElementById('toasts')
    toastList.appendChild(toast)
    setTimeout(function(){
        toast.style.animation = 'slide_hide 2s forwards ease'; 
    },2500)
}

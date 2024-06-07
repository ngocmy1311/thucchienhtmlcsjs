var upload = document.querySelector('#mypicture'); 
var preview = document.querySelector('.preview');
var error = document.querySelector('.error');
upload.addEventListener('change', function(e){
    var file = upload.files[0]; 
    console.log(file);
    if(!file)
        return
    if(!file.name.endsWith('.jpg')){
        error.innerHTML = 'File không đúng định dạng'; 
        return 
    }else{
        error.innerHTML = '';
    }
    if(!file.size / (1024 * 1024) > 5){
        error.innerHTML = 'Hình ảnh không được lớn hơn 5MB'; 
        return 
    }else{
        error.innerHTML = '';
    }

    var img = document.createElement('img'); 
     var fileReader = new FileReader();
     fileReader.readAsDataURL(file);
     fileReader.onloadend = function(e){
        console.log(e.target.result);
        img.src = e.target.result;
     }
    preview.appendChild(img);
})

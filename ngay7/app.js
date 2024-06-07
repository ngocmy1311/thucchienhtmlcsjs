var content = document.querySelector('.content');
console.log(content); 
var input = document.querySelector('.content input');
var btnRemoveAll = document.querySelector('.remove-all'); 
console.log(btnRemoveAll);

var tags = ['nodejs','reactjs']; 
function render(){
    content.innerHTML = ''; 
    for(let i = 0; i < tags.length; i++){
        const tag = tags[i]; 
        content.innerHTML += `
            <li>
                ${tag}
                <i class='bx bx-x' onclick="removeTag()"></i>
            </li>
        `
    }
    content.appendChild(input); 
    input.focus(); 
} 
function removeTag(index){
    tags.splice(index, 1);
    render();
}
render();
input.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        tags.push(input.value); 
        input.value = '';
        render();
    }
})
btnRemoveAll.addEventListener('click', function(){
    tags = [];
    render();
})
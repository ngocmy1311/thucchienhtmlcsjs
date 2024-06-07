fetch("https://fakestoreapi.com/products/1")
  .then((response) => response.json())
  .then(item => {
    console.log(item);
    var products = document.querySelector(".products");
    var newProduct = document.createElement("div");
    newProduct.classList.add("product");
    newProduct.innerHTML = `
      <img src="${item.image}" alt="hình 1">
      <div class="info">
          <div class="name">${item.title}</div>
          <div class="price">${item.price}</div>
      </div>
  `;
    products.appendChild(newProduct);
  });
var searchInput 
= document.querySelector('.search input'); 
console.log(searchInput);
searchInput.addEventListener('input', function(e){
    let textSearch = e.target.value.trim().toLowerCase(); 
    let listProductDOM = document.querySelectorAll('.product'); 
    listProductDOM.forEach(item => {
        if(!item.innerText.includes(textSearch)){
            item.classList.remove('hide');
        }else{
            item.classList.add('hide');
        }
    })

})
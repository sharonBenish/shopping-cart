const productsParentDiv = document.getElementById("product-list");
const filters = document.querySelector("#filter-btn .dropdown-menu");
filters.addEventListener("click", e=>{
    const key = e.target;
    const products = Array.from(productsParentDiv.childNodes);
    productsParentDiv.dataset.category = key.dataset.filter;
    if (key.dataset.filter=="all"){;
        //product.classList.remove("hide");
        productsParentDiv.innerHTML ="";
        render(allProducts);
        likeFunctionality(allProducts);
    } else{
        productsParentDiv.innerHTML ="";
        render(allProducts.filter(x => x.category == key.dataset.filter));
        likeFunctionality(allProducts);
    }
    
})
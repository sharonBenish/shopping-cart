const productsParentDiv = document.getElementById("product-list");
const filters = document.querySelector("#filter-btn .dropdown-menu");
filters.addEventListener("click", e=>{
    const key = e.target;
    const products = Array.from(productsParentDiv.childNodes)
    for (product of products){
        if (key.dataset.filter=="all"){
            product.classList.remove("hide");
            continue;
        }
        if (product.dataset.category != key.dataset.filter){
            product.classList.add("hide");
        } else {
            product.classList.remove("hide")
        }
    }
})
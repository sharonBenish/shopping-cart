const favItems = document.getElementById('fav-items');
let productsInFav = []

productList.addEventListener("click", e=>{
    const el = e.target;
    if(el.classList.contains("like-icon")){
        el.classList.toggle("liked");
        if (el.classList.contains("liked")){
            el.src="./images/5056750251537355865.svg"
        } else{
            el.src = "./images/love.png"
        }
    }

    if (el.classList.contains('like-icon')) {
        const item = el.parentNode.parentNode.parentNode.parentNode.parentNode;
        const name = item.querySelector(".product-name").textContent.trim();
        const price = item.querySelector(".price").textContent.trim();
        const seller = item.querySelector(".seller").textContent.trim();
        const image = item.querySelector(".product-image").src;

        const product = {
            name:name,
            price:+ price,
            seller:seller,
            image:image,
            count:1,
            id:String(Date.now())
        }
        addToFavList(product);
        addToFavHTML();
    }
})

function addToFavList(product) {
    if (productsInFav.length > 0) {
        for (item of productsInFav) {
            if (product.name == item.name) {
                item.count += 1;
                console.log(productsInFav)
                return;
            }
        }
    }
    productsInFav.push(product);
    console.log(productsInFav);   
}

function addToFavHTML() {
    if (productsInFav.length > 0) {
        noItemsMsg.classList.add("hide");
        const items = productsInFav.map(product => {
            return `<div class="col-12 cart-items">
                    <div class="row">
                        <div class="col-4 image">
                            <img src=${product.image} alt="" class="product-image">
                        </div>
                        <div class="col-8 details">
                            <div class="name_cancel">
                                <div class="name">
                                    <div class="product-name">${product.name}</div>
                                    <div class="seller">${product.seller}</div>
                                    <h4>$${product.price}</h4>
                                </div>
                                <div class="cancel-product">
                                    <button class="cancel-btn" data-id=${product.id}>x</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        })
        favItems.innerHTML =items;
        checkoutBtn.classList.remove("hide");
    } else {
        favItems.innerHTML = "No item";
    }    
}

favItems.addEventListener("click", (e) => {
    const key = e.target;
    const parentItem = key.parentNode.parentNode.parentNode;
    console.log(parentItem);

    const cancelBtn = e.target.classList.contains("cancel-btn");

    if (cancelBtn) {
        if (key.classList.contains("liked")) {
            el.src = "./images/love.png"
        }
        productsInFav = productsInFav.filter(product=> product.id != key.dataset.id)
        console.log(productsInFav);
    }
    addToFavHTML();
})
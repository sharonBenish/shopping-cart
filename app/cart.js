const cartItems = document.querySelector("#cart-items");
const orderSummary = document.querySelector(".order-summary");
const checkoutBtn = document.querySelector(".checkout-btn");
const noItemsMsg = document.querySelector(".no-items");
const cartCounter = document.querySelector(".cart-counter");

let productsInCart = [];


//add event listeners to each of the products in productList to know when the add to cart btn is clicked

productList.addEventListener("click", e=>{
    const el = e.target;
    if(el.className == "add-to-cart"){
        const item = el.parentNode;
        const name = item.querySelector(".product-name").textContent.trim();
        const price = item.querySelector(".price").textContent.trim();
        const seller = item.querySelector(".seller").textContent.trim();
        const image = item.querySelector("img").src;

        const product = {
            name:name,
            price:+ price,
            seller:seller,
            image:image,
            count:1,
            id:String(Date.now())
        }

        addToCartList(product);
        addToCartHTML();
        addToCounter();
       
    }
})

function addToCartList(product){

    if (productsInCart.length > 0){
        for (item of productsInCart){
            if(product.name == item.name){
                item.count += 1;
                console.log(productsInCart)
                return;
            }
        }
    }
    productsInCart.push(product);
    console.log(productsInCart);   
}

function addToCartHTML(){
    if (productsInCart.length > 0){
        noItemsMsg.classList.add("hide");
        const items = productsInCart.map(product => {
            return `<div class="col-12 cart-items">
                    <div class="row">
                        <div class="col-4 image">
                            <img src=${product.image} alt="">
                        </div>
                        <div class="col-8 details">
                            <div class="name_cancel">
                                <div class="name">
                                    <div class="product-name">${product.name}</div>
                                    <div class="seller">${product.seller}</div>
                                </div>
                                <div class="cancel-product">
                                    <button class="cancel-btn" data-id=${product.id}>x</button>
                                </div>
                            </div>
                            <div class="quant_price">
                                <div class="quant" data-id=${product.id}>
                                    <button class="minus">-</button>
                                    <div class="quantity">${product.count}</div>
                                    <button class="add">+</button>
                                </div>
                                <div class="priceDiv">$<span class="price">${product.count * product.price}</span></div>
                            </div>
                        </div>
                    </div>
                </div>`
        })
    
        cartItems.innerHTML =items.join("");
        var sum = productsInCart.map(product => {return product.count * product.price}).reduce((a,b)=>a +b ,0);
        orderSummary.querySelector(".sub-total").innerHTML = sum;
        orderSummary.querySelector(".total").innerHTML = sum;
        orderSummary.classList.remove("hide");
        checkoutBtn.classList.remove("hide");

    } else {
        cartItems.innerHTML ="";
        noItemsMsg.classList.remove("hide");
        orderSummary.classList.add("hide");
        checkoutBtn.classList.add("hide");
    }
    
}

function addToCounter(){
    const itemsNo = productsInCart.map(product=> product.count).reduce((a,b)=> a+b, 0);
    cartCounter.innerHTML = itemsNo;
}


cartItems.addEventListener("click", (e)=>{
    const key = e.target;
    const cancelBtn = e.target.classList.contains("cancel-btn");
    const addBtn = e.target.classList.contains("add");
    const minusBtn = e.target.classList.contains("minus");

    if(cancelBtn){
        productsInCart = productsInCart.filter(product=> product.id != key.dataset.id)
        console.log(productsInCart);
    }
    if(addBtn || minusBtn){
        const quantDiv = key.parentNode;
       // const quantity = quantDiv.querySelector("quantity");
        const indx = productsInCart.findIndex(product => product.id == quantDiv.dataset.id);
        if (addBtn){
            productsInCart[indx].count +=1;
        }else if (minusBtn){
            productsInCart[indx].count -=1; 
        }
        if (productsInCart[indx].count <= 0){
           productsInCart.splice(indx,1);
        }
    }
    addToCounter();
    addToCartHTML();

})

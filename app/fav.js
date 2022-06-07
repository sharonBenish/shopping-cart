const favoritesDiv = document.getElementById("favorites");

let likedItems =[];
function likeFunctionality(listOfItems){
    const cards = productList.querySelectorAll(".card");
    console.log([...cards]);
    cards.forEach(card => card.addEventListener("click", e=>{
        const el = e.target;
        const cardName = card.querySelector(".product-name").textContent.trim();
        const idx =listOfItems.findIndex(product => product.name == cardName);
        //console.log(idx);
        //console.log(cardName);
        //console.log(el);
        if(el.classList.contains("like-icon")){
            el.classList.toggle("liked");
            if (el.classList.contains("liked")){
                el.src="./images/5056750251537355865.svg";
                listOfItems[idx].liked = true;
                console.log(listOfItems);
                likedItems.push(listOfItems[idx]);
            } else{
                el.src = "./images/love.png";
                listOfItems[idx].liked = false;
                console.log(listOfItems);
                likedItems = likedItems.filter(item => item.name !== cardName);
            }
        }
        console.log(likedItems);
        addToFavorites();
    })
    )
}


function addToFavorites(){
   const liked = likedItems.map( item =>`<div class="col-12 favItems">
                                            <div class="row">
                                                <div class="col-4 image"><img src=${item.image} alt=""></div>
                                                <div class="col-8 details">
                                                    <div class="name_cancel">
                                                        <div class="name">
                                                            <div class="product-name">${item.name}</div>
                                                            <div class="seller">${item.seller}</div>
                                                            <div>$<span class="price">${item.price}</span></div>
                                                        </div>
                                                        <div class="cancel-product">
                                                            <button class="cancel-btn">x</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`
                                    
    )
    favoritesDiv.innerHTML = liked;

}

likeFunctionality(allProducts)

favoritesDiv.addEventListener("click", (e)=>{
    const key = e.target;
    const productName = key.parentElement.parentElement.querySelector(".product-name").textContent.trim();
    const cards = productList.querySelectorAll(".card");
    console.log(productName)
    if(key.className == "cancel-btn"){
            
        likedItems = likedItems.filter(item => item.name !== productName);
        const idx = allProducts.findIndex(product => product.name == productName);
        allProducts[idx].liked = false;
        console.log(allProducts);
        console.log(likedItems);
        addToFavorites();

        cards.forEach( card => {
            const cardName = card.querySelector(".product-name").textContent.trim();
            if (cardName == productName){
                const icon = card.querySelector(".like-icon");
                icon.src =  "./images/love.png";
                icon.classList.remove("liked");
            }
        })
    }
})

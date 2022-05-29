const allProducts = [
    {
        id : 1,
        name:"Baguette Diamond Bar Necklace",
        price:650,
        seller:"Swarovski crystals",
        image:"./images/product-images/bar-necklace-lg.jpeg",
        category:"necklace",
        liked:false
    },
    {
        id : 2,
        name:"Beaded Medium Hoops",
        price:350,
        seller:"Swarovski crystals",
        image:"./images/product-images/beaded-hoops-lg.jpeg",
        category:"earring",
        liked:false
    },
    {
        id : 3,
        name:"Bold Large Hoops",
        price:550,
        seller:"Swarovski crystals",
        image:"./images/product-images/big-hoops-lg.jpeg",
        category:"earring",
        liked:false
    },
    {
        id : 4,
        name:"Block Ring",
        price:78,
        seller:"Swarovski crystals",
        image:"./images/product-images/block-ring-lg.jpeg",
        category:"ring",
        liked:false
    },
    {
        id : 5,
        name:"Bold Bangle",
        price:500,
        seller:"Swarovski crystals",
        image:"./images/product-images/bold_bangle_bracelet-lg.jpeg",
        category:"bracelet",
        liked:false,
    },
    {
        id : 6,
        name:"Block Large Hoops",
        price:98,
        seller:"Swarovski crystals",
        image:"./images/product-images/box-hoops-lg.jpeg",
        category:"earring",
        liked:false
    },
    {
        id : 7,
        name:"Boyfriend Bold Bracelet",
        price:78,
        seller:"Swarovski crystals",
        image:"./images/product-images/chain-bracelet-lg.jpeg",
        category:"bracelet",
        liked:false
    },
    {
        id : 8,
        name:"Boyfriend Bold Chain Necklace",
        price:300,
        seller:"Swarovski crystals",
        image:"./images/product-images/chain-necklace-lg.jpeg",
        category:"necklace",
        liked:false
    },
    {
        id : 9,
        name:"Croissant Dome Ring",
        price:78,
        seller:"Swarovski crystals",
        image:"./images/product-images/croissant-ring-lg.jpeg",
        category:"ring",
        liked:false
    },
    {
        id : 10,
        name:"Dot Chain Bracelet",
        price:225,
        seller:"Swarovski crystals",
        image:"./images/product-images/dot-charm-bracelet-lg.jpeg",
        category:"bracelet",
        liked:false
    },
    {
        id : 11,
        name:"Duet Ring",
        price:128,
        seller:"Swarovski crystals",
        image:"./images/product-images/duet-ring-lg.jpeg",
        category:"ring",
        liked:false
    },
    {
        id : 12,
        name:"Layered Opal Necklace",
        price:128,
        seller:"Swarovski crystals",
        image:"./images/product-images/layered-necklace-lg.jpeg",
        category:"necklace",
        liked:false
    },
    {
        id : 13,
        name:"Lotus Bracelet",
        price:78,
        seller:"Swarovski crystals",
        image:"./images/product-images/letter-bracelet-lg.jpeg",
        category:"bracelet",
        liked:false
    },
    {
        id : 14,
        name:"Bold Small Hoops",
        price:350,
        seller:"Swarovski crystals",
        image:"./images/product-images/small-hoops-lg.jpeg",
        category:"earring",
        liked:false,
    },
    {
        id : 15,
        name:"Snake Ring",
        price:350,
        seller:"Swarovski crystals",
        image:"./images/product-images/snake-ring-lg.jpeg",
        category:"ring",
        liked:false,
    },
    {
        id : 16,
        name:"Pave Diamond Round Studs",
        price:350,
        seller:"Swarovski crystals",
        image:"./images/product-images/studs-lg.jpeg",
        category:"earring",
        liked:false
    }
    
]

const productList = document.getElementById("product-list");

render(allProducts);



function render(data){
    for (x of data){
        const product = document.createElement("div");
        product.classList.add("col-6", "col-md-4", "col-xxl-3");
        product.dataset.category = x.category;
        product.innerHTML =`<div class="card" id=${x.id}>
                                <img src=${x.image} alt="..." class='product-image'>
                                <div class="card-body">
                                    <div class="card-text">
                                        <div class="name_price">
                                            <div class="product-name">${x.name}
                                            </div>
                                            <div class="product-price" id="price">
                                            $<span class="price">${x.price}</span>
                                            </div>
                                        </div>
    
                                        <div class="seller_fav">
                                            <div class="seller">${x.seller}</div>
                                            <div class="fav"><img src="./images/love.png" alt="" class="like-icon" id=${x.id}></div>
                                        </div>
                                    </div>     
                                </div>
                                <button class="add-to-cart">Add to cart</button>
                            </div>`
        productList.appendChild(product);
    }
}
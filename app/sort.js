const sorts = document.querySelector("#sort-btn .dropdown-menu");
sorts.addEventListener("click", e=>{
    const key = e.target;
    //sortedlist = allproducts.sort;
    let sortedList = [...allProducts];
    if (key.dataset.sort == "all"){
        sortedList = [...allProducts];
    } else if (key.dataset.sort == "high-to-low"){
        sortedList.sort((a,b)=> a.price>b.price? -1 : 1)
        console.log(sortedList);
    } else if (key.dataset.sort == "low-to-high"){
        sortedList.sort((a,b)=> a.price<b.price?-1:1);
        console.log(sortedList)
    }
    console.log(allProducts);
    productList.innerHTML="";
    render(sortedList);
})
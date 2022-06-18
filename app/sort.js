const sorts = document.querySelector("#sort-btn .dropdown-menu");
sorts.addEventListener("click", e=>{
    const key = e.target;
    //sortedlist = allproducts.sort;
    var sortedList =[];
    if(productList.dataset.category == "all"){
        sortedList = [...allProducts];  
    } else{
        sortedList =[...allProducts.filter(x => x.category == productList.dataset.category)];
    }
    
    if (key.dataset.sort == "all"){
        sortedList = sortedList;
    } else if (key.dataset.sort == "high-to-low"){
        sortedList.sort((a,b)=> a.price>b.price? -1 : 1)
        console.log(sortedList);
    } else if (key.dataset.sort == "low-to-high"){
        sortedList.sort((a,b)=> a.price<b.price?-1:1);
        console.log(sortedList)
    }
    productList.innerHTML="";
    render(sortedList);
    likeFunctionality(sortedList)
})
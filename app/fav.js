productList.addEventListener("click", e=>{
    const el = e.target;
    console.log(el);
    if(el.classList.contains("like-icon")){
        el.classList.toggle("liked");
        if (el.classList.contains("liked")){
            el.src="./images/5056750251537355865.svg"
        } else{
            el.src = "./images/love.png"
        }
    }
})


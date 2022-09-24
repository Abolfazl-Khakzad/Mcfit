var btn=document.querySelector(".nav-button");
var menu=document.querySelector(".nav-menu");
var content=document.querySelector(".awardContetn");
var awardImg=document.querySelector(".awardImage");
var galleryItem=document.querySelectorAll(".gallery-list-item");
var card1=document.querySelector(".card-1");
var card2=document.querySelector(".card-2");
var card3=document.querySelector(".card-3");

btn.addEventListener("click" , ()=>{
    btn.classList.toggle("change");
})

window.addEventListener("scroll" , ()=>{
    if(window.scrollY>700){
        menu.classList.add("custom-navbar");
    }
    else{
        menu.classList.remove("custom-navbar");

    }
})
window.addEventListener("scroll" , ()=>{
    if(window.scrollY>1000){
        content.classList.add("fromRight");
    }
    else{
        content.classList.remove("fromRight");

    }
})
window.addEventListener("scroll" , ()=>{
    if(window.scrollY>1000){
        awardImg.classList.add("fromLeft");
    }
    else{
        awardImg.classList.remove("fromLeft");

    }
})

galleryItem.forEach(element => {
    element.addEventListener("click" , ()=>{
        element.classList.add("active-item");
        element.Sibling.classList.remove("active-item");
    var x=element.getAttribute("data-filter");
    document.querySelectorAll(".x");
    })
    
});

window.addEventListener("scroll" , ()=>{
    // console.log(window.scrollY);
    if(window.scrollY>4200){
        card1.classList.add("moveFromleft");
        card2.classList.add("moveFromBottom");
        card3.classList.add("moveFromRight");
    }
    else{
        card1.classList.remove("moveFromleft");
        card2.classList.remove("moveFromBottom");
        card3.classList.remove("moveFromRight");
    }
})
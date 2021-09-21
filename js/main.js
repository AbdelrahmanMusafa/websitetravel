//laoding page

setTimeout(function() {
        let body= document.querySelector('html');
        let loadingPage = document.querySelector(".loader");
        loadingPage.classList.add("active")
        body.style.overflowY= "auto"
  },1300);

//show navbar
let menubtn = document.querySelector("#menue-bar");

let navbar = document.querySelector(".navbar");
menubtn.addEventListener('click',()=>{
    menubtn.classList.toggle('fa-times')
    navbar.classList.toggle('active');
})


//show input btn
let searchbtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");

window.scroll = () =>{
    searchbtn.classList.remove('fa-times')
    searchBar.classList.remove('active'); 
    menubtn.classList.remove('fa-times')
    navbar.classList.remove('active');
    loginform.classList.remove('active');
}
searchbtn.addEventListener('click',()=>{
     searchbtn.classList.toggle('fa-times')
     searchBar.classList.toggle('active');
})
//end show input btn
let loginbtn = document.querySelector("#login-btn");
let loginform = document.querySelector(".login-form-conaiern");
let formClose = document.querySelector("#form-close");

loginbtn.addEventListener('click',()=>{
    loginform.classList.add('active');
})
formClose.addEventListener('click',()=>{
    loginform.classList.remove('active');
})
// navbar scroll
window.onscroll = function(){
    var headerNav = document.querySelector("#navbarrr")
    var navbarr = document.querySelector(".navbar")
    var top =window.scrollY
    if(top >= 50){
headerNav.classList.add('activeee');
navbarr.classList.add('activeee');

    }
   else{
headerNav.classList.remove('activeee');
navbarr.classList.remove('activeee');

   }
}


//slider video

let videoButton = document.querySelectorAll(".vidbtn")
videoButton.forEach(btn =>{
   btn.addEventListener('click',()=>{
    document.querySelector('.controls .active').classList.remove('active')
btn.classList.add('active')
let src = btn.getAttribute('data-src')
document.querySelector('#videoslider').src =src;
   })
}) 
var swiper = new Swiper(".revew-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
           slidesPreView:2 
        },
        1024:{
            slidesPerView:3
        }
        
    }

});

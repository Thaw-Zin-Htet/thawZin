(function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();

  // progress bar animated

  $(function() {

    var $section = $('#skill');

    function loadDaBars() {
                $(".bar").each(function() {
                    $(this)
                        .data("origWidth", $(this).width())
                        .width(0)
                        .animate({
                            width: $(this).data("origWidth")
                        }, 2000);
                });
    }

    function stayWidth(){
      $(".bar").each(function(){
        $(this).width=0;
      })
    }


    // $(document).bind('scroll', function(ev) {
    //     var scrollOffset = $(document).scrollTop();
    //     var containerOffset = $section.offset().top - window.innerHeight;
    //     if (scrollOffset > containerOffset) {
    //         loadDaBars();
    //         // unbind event not to load scrolsl again
    //         $(document).unbind('scroll');
    //     }else{

    //     }
    // });

    $section.waypoint(function(direction){
      if(direction==="down"){
        loadDaBars();
      }else if(direction==="up"){
        stayWidth();
      }
    });
});

// nav-scroll-change

function setActive(current){
  $(".nav-link").removeClass("current-section")

  $(`.nav-link[href="#${current}"]`).addClass('current-section');
}

function navScroll(){
  let currentSection=$("section[id]");
  currentSection.waypoint(function(direction){
      if(direction == "down"){
          let currentSectionId=($(this.element).attr("id"));
          console.log(currentSectionId)  
          setActive(currentSectionId);
      }
  },{offset:"0px"});

  currentSection.waypoint(function(direction){
      if(direction == "up"){
          let currentSectionId=($(this.element).attr("id"));
          console.log(currentSectionId)  
          setActive(currentSectionId);
      }
  },{offset:"0px"})
}

navScroll();
//copy-right

let year = new Date;
let copyRight=document.getElementById("copy-right");

copyRight.innerHTML = year.getFullYear() +" "+"All Right Reversed. Designed By Thaw Zin Htet";


// projects filter

$(".portfolio-content").isotope({
  itemSelector:'.portfolio-item',
  layoutMode:'masonry',
});

$(".filter li").click(function(){
  $(".filter li").removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr("data-filter");
  $(".portfolio-content").isotope({
    filter:selector,
  });
  return false;
});

// day and light
let icon = document.querySelectorAll(".icon");
let nav=document.getElementById("nav")

icon.forEach(icons=>{
  console.log(icons)
  icons.addEventListener("click",function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icons.innerHTML='<i class="fas fa-moon"></i>';
        nav.classList.remove("navbar-dark");
        nav.classList.add("navbar-light")
    }else{
      icons.innerHTML='<i class="fas fa-sun"></i>'
      nav.classList.remove("navbar-light");
      nav.classList.add("navbar-dark");
    }
  })
})

// theme color
document.querySelector(".switcher-btn").onclick = ()=>{
  document.querySelector(".color-switcher").classList.toggle("active");
}

let themeButton =document.querySelectorAll(".theme-buttons");


themeButton.forEach(color =>{
  color.addEventListener('click',()=>{
    let dataColor=color.getAttribute("data-color");
    document.querySelector(':root').style.setProperty("--orange-text",dataColor)
  })
});

// loading
$(window).on("load",function(){
  $(".loader-container").fadeOut(500,function(){
      $(this).remove();
  })
});

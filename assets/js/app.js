// bg
var bg = document.getElementsByClassName('bg');

function bgfun() {
  bg[0].style.transform = 'scale(1)';
}



// logo anim
var headerLogo = document.getElementsByClassName('headerLogo');

function headerLogofun() {
  setTimeout(function () {
    headerLogo[0].style.transform = 'scale(1.1)';
    setTimeout(function () {
      headerLogo[0].style.transform = 'scale(1)';
    }, 300);
  }, 1500);

}

// white grad
var logoContainer = document.getElementsByClassName('logoContainer');
var whiteGradAnim = document.getElementsByClassName('whiteGradAnim');

logoContainer[0].addEventListener('mouseenter',()=>{
  whiteGradAnim[0].style.top = '-5vw';
});
logoContainer[0].addEventListener('mouseleave',()=>{
  whiteGradAnim[0].style.top = '0vw';
});

function whiteGradAnimFun() {
  setTimeout(function () {
    whiteGradAnim[0].style.top = '0vw';
  }, 1000);
}


// footer bg anim
var footerBG = document.getElementsByClassName('footerBG');

function footerBGfun() {
  if(footerBG[0].getBoundingClientRect().top < window.innerHeight / 100 * 40){
    footerBG[0].style.transform = 'scale(1)';
  }
}

// window listeners
window.addEventListener('load',()=>{
  headerLogofun();
  bgfun();
  whiteGradAnimFun();
});

window.addEventListener('scroll',()=>{
  footerBGfun();
});

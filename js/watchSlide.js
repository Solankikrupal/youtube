const sideBar = document.querySelector('.sideBar');
const topBar = document.querySelector('.topBar');
const menuTags = document.querySelectorAll('.menuTags');
const menuTagText = document.querySelectorAll('.menuTagText');
const hamBurger = document.querySelector('.hamBurger');
const MoreOnYoutube = document.querySelector('.MoreOnYoutube');
const SettingBar =document.querySelector('.SettingBar');
const copyRightBar = document.querySelector('.copyRightBar');
const menuTagIcon = document.querySelectorAll('.menuTagIcon')
const middleBarChild = document.querySelector('.middleBar ul li')
const youTubeGallery = document.querySelector('.youTubeGallery')
const thumbnail = document.querySelectorAll('.thumbnail');

hamBurger.addEventListener('click',()=>{
  sideBar.classList.toggle('watchContainer')

})

sideBar.addEventListener('mouseover',()=>{
  sideBar.style.overflowY = 'scroll';
})
sideBar.addEventListener('mouseout',()=>{
  sideBar.style.overflowY = 'hidden';
})

menuTags.forEach((item)=>{
  item.addEventListener('click',()=>{
    var ActiveTag = document.querySelector('.ActiveTag')
    ActiveTag.classList.remove('ActiveTag')
    item.classList.add('ActiveTag')
  })
})

const seemoreSec = document.querySelector('.seemoreSec');
const seelessSec = document.querySelector('.seelessSec');
const youTuberNameAndDescribe = document.querySelector('.youTuberNameAndDescribe')
seelessSec.addEventListener('click',()=>{
youTuberNameAndDescribe.classList.add('slideUPUp');
seemoreSec.classList.remove('hide')
})
 seemoreSec.addEventListener('click',()=>{
youTuberNameAndDescribe.classList.remove('slideUPUp');
seemoreSec.classList.add('hide')
 })

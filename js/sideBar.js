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

  toggleClass(sideBar,'sideBar2');
  toggleClass(topBar,'topBar2');
  menuTags.forEach((item, i) => {
    toggleClass(item,'menuTags2')
  });
  menuTagText.forEach((item)=>{
    toggleClass(item,'menuTagText2')
  })
menuTagIcon.forEach((item)=>{
  toggleClass(item,"menuTagIcon2")
})

  hideClass(middleBar);
  hideClass(SubscriptionBar);
  hideClass(MoreOnYoutube);
  hideClass(SettingBar);
  hideClass(copyRightBar);

  youTubeGallery.classList.toggle('slideCard');
  thumbnail.forEach((item)=>{
    item.classList.toggle('slidethumbnail');

  })


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


function toggleClass(classname1,classname2){
  classname1.classList.toggle(classname2);
}

function hideClass(classname){
  classname.classList.toggle('hide');
}

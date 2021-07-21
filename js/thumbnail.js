const thumbnail1 = document.querySelectorAll('.thumbnail');
const watchthumbnail1 = document.querySelectorAll('.watchThumbnail');
const thumbTile = document.querySelectorAll('.thumbTile');
const dotsMenu = document.querySelectorAll('.dotsMenu');
const dotsMenu2 = document.querySelectorAll('.dotsMenu2');
thumbnail1.forEach((item,index)=>{
  item.addEventListener('mouseover',()=>{
    thumbTile[index].style.visibility = 'visible';
    dotsMenu[index].style.visibility = 'visible';
  })
  item.addEventListener('mouseout',()=>{
    thumbTile[index].style.visibility = 'hidden';
    dotsMenu[index].style.visibility = 'hidden';
  })

})

watchthumbnail1.forEach((item,index)=>{
  item.addEventListener('mouseover',()=>{
    thumbTile[index].style.visibility = 'visible';
    dotsMenu2[index].style.visibility = 'visible';
  })
  item.addEventListener('mouseout',()=>{
    thumbTile[index].style.visibility = 'hidden';
    dotsMenu2[index].style.visibility = 'hidden';
  })

})

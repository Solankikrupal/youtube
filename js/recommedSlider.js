const rightarrow = document.querySelector('.right-arrow');
const leftarrow = document.querySelector('.left-arrow');
const recommededBarContainer = document.querySelector('.recommededBarContainer');
const youtubeSection = document.querySelector(".youtubeSection");
const recom = document.querySelectorAll('.recom')
const size =  recommededBarContainer.clientWidth;
var window1 = 550 ;



  var turn = 0;
  var counter = 0;
  var temp = 0;
// rightarrow.addEventListener('click',()=>{
//   turn++;
//
//   if(turn == 1){
//       leftarrow.classList.remove('hide');
//       leftarrow.classList.add('show')
//
//   }
//   // console.log(size * counter)
//
//   recommededBarContainer.style.transition = 'transform 0.5s ease';
//   recommededBarContainer.style.transform = 'translateX('+(-(temp) * counter)+'px)';
//   counter = counter + 1;
//   temp = temp + window1;
//   console.log(temp)
//
// })
//
//
// leftarrow.addEventListener('click',()=>{
//
//
//     recommededBarContainer.style.transition = 'transform 0.5s ease';
//   recommededBarContainer.style.transform = 'translateX('+(temp)+'px)';
//
//
// })


recom.forEach((item)=>{
  item.addEventListener('click',()=>{
    var active = document.querySelector('.active');
    active.classList.remove('active');
    item.classList.add('active');
  })

})







const showless = document.querySelectorAll('.showless');
const middleBar = document.querySelector('.middleBar');
const showmore = document.querySelectorAll('.showmore');
const SubscriptionBar = document.querySelector('.SubscriptionBar');
showless.forEach((show,item)=>{
  show.addEventListener('click',()=>{
    if(item == 0){
        middleBar.classList.add('up');
    }
    else if(item == 1){
      SubscriptionBar.classList.add('up1')
    }

  showmore[item].classList.remove('hide');
  showmore[item].classList.add('show');
  showless[item].classList.remove('show');
  showless[item].classList.add('hide')
  })
})

showmore.forEach((show,item)=>{
  show.addEventListener('click',()=>{
    if(item == 0){
        middleBar.classList.remove('up');
    }
    else if(item == 1){
      SubscriptionBar.classList.remove('up1')
    }

    showless[item].classList.remove('hide');
    showless[item].classList.add('show');
    showmore[item].classList.add('hide');
    showmore[item].classList.remove('show');
  })
})

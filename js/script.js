const colors = ["🔘","🔘","🔴","🔴","🟠","🟠","🟡","🟡","🟢","🟢","🔵","🔵","🟣","🟣","⚫","⚫"];

var shuf_colors = colors.sort(() => (Math.random() > .5) ? 2 : -1);

for (var i = 0; i < colors.length; i++) {
  let box = document.createElement('div')
  box.className = 'item';
  box.innerHTML = shuf_colors[i]
  box.onclick = function(){
    this.classList.add('boxOpen')
    setTimeout(function(){
      if(document.querySelectorAll('.boxOpen').length > 1){
        if(document.querySelectorAll('.boxOpen')[0].innerHTML == 
        document.querySelectorAll('.boxOpen')[1].innerHTML){
          document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
          document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')
          document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
          document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
 
          if (document.querySelectorAll('.boxMatch').length == colors.length){
            alert("Parabéns! Você Conseguiu.")
          } 
        } else {
            document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
            document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
          }
      }
    },500)
  }
  document.querySelector('.game').appendChild(box);
}
let searhIngine = document.querySelector('.searchbox');
let searchbutton = document.querySelector('.button');

searchbutton.onclick = function(){
    let url='https://www.google.com/search?q='+searhIngine.value;
    window.open(url,'_self');
}
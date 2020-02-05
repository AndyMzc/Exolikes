var like = document.getElementById('like');
var dislike = document.getElementById('dislike');
var number = document.getElementById('number');
var cpt = parseInt(number.innerText);
like.addEventListener('click', function (){
    cpt = cpt+1;
    number.innerHTML = cpt;
});
dislike.addEventListener('click', function (){
    if (cpt >= 1)
    cpt = cpt-1;
    number.innerHTML = cpt;
});
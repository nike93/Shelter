let one = document.querySelector('.menu-btn');
let meniu = document.querySelector('.linka-mini');

one.addEventListener('click', function(){
    console.log(one.classList.toggle('-active'))
	
    console.log(meniu.classList.toggle('active1'))
	
})
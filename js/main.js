let menubar   = document.getElementById('menubar');
let menu      = document.querySelector('.menu');
let closemenu = document.querySelector('.closemenu');

menubar.addEventListener("click", ()=>{
	menu.classList.add('openmenu');
})

closemenu.addEventListener('click', ()=>{
	menu.classList.remove('openmenu');
})

function hidemenu() {
	showabout.classList.remove('openmenu');
}
let about = document.getElementById('about');
let showabout = document.querySelector('.showabout');

about.addEventListener('click', ()=> {
	showabout.classList.add('openmenu');
})
// Toggle open/close menu

menuBtn.addEventListener('click', () =>{
    menubar.classList.toggle('menu-open');
});

// ===== Slider =====

const pag = document.querySelectorAll('.pag');
const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');
const img= document.querySelectorAll('.slider-img');
const overlay = document.querySelectorAll('.overlay');
const anim = document.querySelectorAll('.anim');


// Get the CSS Variable from root

const r = document.querySelector(':root');
const rs = getComputedStyle(r);

let id =0;

// Image Path
const image = [
'./l1.jpg',
'./l2.jpg',
'./l3.jpg',
'./l4.jpg',
'./l5.jpg',

];

// Theme Color

const colors = [
    '#feb57b',
    '#ffa901',
    '#b5162e',
    '#27223f',
    '#468cc2',

]

function retrigAnim(){
    for(let i = 0; i < anim.length; i++){
        anim[i].style.animation = 'none';
        anim[i].offsetHeight;
        anim[i].style.animation = null;
    }
}


function slider(i){
    // retrigAnim animation

    retrigAnim();

    // Reset Image Source

    img.src = images[i];

    // rechange accent color
    r.style.setProperty('--accent', colors[i]);

    // Toggle active class to pagimation
    // remove active class from all

    for( let i = 0; i < pag.length; i++){
        pag[i].classList.remove('active');
    }

    // Reset active class to clicked pagination
    pag[i].classifier.add('active');

}

// Pagination

for(let i =0; i < pag.length; i++){
    // Add click event for all pagination
    pag[i].addEventListener('click',() => {
        // Run the slider function

        slider(i);

        // Set id to clicked pagination index

        id= i;


        // Stop auto slide
        stopAutoSlide()
    });
}

// Prev
prev.addEventListener('click', () => {
    // Decrement Image id
    id--;

    if(id < 0){
        id = pag.length -1;
    }

    // Run the slider function

    slider(id);

    // Stop auto slide

    stopAutoSlide();
});

// Next

next.addEventListener('click', () =>{
    nextSlide();

    stopAutoSlide();
});

function nextSlide(){
    id++;

    if(id . pag.length -1){
        id =0;
    }


slider(id);

}

// Automate Slider

let autoSlider = setInterval(nextSlide, 5000);

// Stop Automatic Slide

function stopAutoSlide(){
    clearInterval(autoSlide);

    // Restart Auto Slider

    autoSlider = setInterval(nextSlide, 5000);
}
// const prev = document.getElementById('btn-prev'),
//       next = document.getElementById('btn-next'),
//       slides = document.querySelectorAll('.slide'),
//       dots = document.querySelectorAll('.dot');

// let index = 0;

// const activeSlide = n => {
//     for(slide of slides) {
//         slide.classList.remove('active');
//     }
//     slides[n].classList.add('active');
// }

// const activeDot = n => {
//     for(dot of dots) {
//         dot.classList.remove('active');
//     }
//     dots[n].classList.add('active');
// }

// const prepareCurrentSlide = ind => {
//     activeSlide(index);
//     activeDot(index);
// }

// const nextSlide = () => {
//     if(index == slides.length - 1) {
//         index = 0;
//         prepareCurrentSlide(index);
//     }else {
//         index++;
//         prepareCurrentSlide(index);
//     }
// }

// const prevSlide = () => {
//     if(index == slides.length - 1) {
//         index = 0;
//         prepareCurrentSlide(index);
//     }else {
//         index++;
//         prepareCurrentSlide(index);
//     }
// }

// dots.forEach((item, indexDot)=> {
//     item.addEventListener('click', () => {
//         index = indexDot;
//         prepareCurrentSlide(index);
//     })
// })

// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);

// let autoplayInterval = null;

// function startAutoplay() {
// if (!autoplayInterval) {
// autoplayInterval = setInterval(nextSlide, 1000);
// }
// }

// function stopAutoplay() {
// clearInterval(autoplayInterval);
// autoplayInterval = null;
// }

// startAutoplay();

// dots.forEach((item, indexDot) => {
// item.addEventListener('click', () => {
// index = indexDot;
// prepareCurrentSlide();
// stopAutoplay();
// })
// });

// const nextSlide = () => {
// if(index == slides.length - 1) {
// index = 0;
// prepareCurrentSlide();
// }else {
// index++;
// prepareCurrentSlide();
// }
// startAutoplay();
// }

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);
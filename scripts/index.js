// index.js
const topBnr = document.querySelector('.top_bnr_swiper .top_bnr')
const heroBnr = document.querySelector('.hero_bnr .hero')
const best = document.querySelector('.best_right .best_swiper')
console.log(topBnr, heroBnr, best);
const bestSwiper = new Swiper(best, {
    slidesPerView:4,
    spaceBeetween:20,
})

const topBnrSwiper = new Swiper(topBnr, {
    effect:'fade',
    loop:true,
    autoplay:{delay:5000,},
})
console.log(topBnr);

const heroBnrSwiper = new Swiper(heroBnr, {
    loop:true,
    // pagination:{
    //     el:'.hero .page',
    //     type:'fraction',
    // },
    // navigation:{
    //     prevEl:'.hero .prev',
    //     nextEl:'.hero .next',
    // },
    // scrollbar:{
    //     el:'.hero .scroll',
    // },
})
// index.js
const heroBnr = document.querySelector('.hero_bnr .hero')
const best = document.querySelector('.best_right .best_swiper')
const coming = document.querySelector ('.coming_wrap .coming_swiper') 
const newslide = document.querySelector('.new_wrap .new_swiper')
const product = document.querySelector('.product_right .product_swiper')
console.log( heroBnr, best , coming, newslide, product);


const bestSwiper = new Swiper(best, {
    slidesPerView: 4,
    spaceBetween: 20,
})
const heroBnrSwiper = new Swiper(heroBnr, {
    loop: true,
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
const comingSwiper = new Swiper(coming, {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
})
const newSwiper = new Swiper(newslide, {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
})
const product_swiper = new Swiper(product, {
    loop: true,
    slidesPerView: 4,
    grid: {
    rows: 2,        // 2줄
    fill: 'row'     // 가로 → 세로 순서로 채움
  },
    spaceBetween: 20,
})
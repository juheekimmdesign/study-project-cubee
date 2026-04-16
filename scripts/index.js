// index.js
const heroBnr = document.querySelector('.hero_bnr .hero');
const best = document.querySelector('.best_right .best_swiper');
const coming = document.querySelector ('.coming_wrap .coming_swiper');
const newslide = document.querySelector('.new_wrap .new_swiper');
const mdpick = document.querySelector('.mdpick_right .mdpick_swiper');
const artistSelect = document.querySelectorAll('.artist_right a img')
console.log( heroBnr, best , coming, newslide, mdpick, artistSelect[0],artistSelect[1],artistSelect[2]);

artistSelect[0].addEventListener('mouseover',function(){
    artistSelect[0].src = './images/product/artist_04.jpg';
});
artistSelect[0].addEventListener('mouseout',function(){
    artistSelect[0].src = './images/product/artist_01.jpg';
});

artistSelect[1].addEventListener('mouseover',function(){
    artistSelect[1].src = './images/product/artist_05.jpg';
});
artistSelect[1].addEventListener('mouseout',function(){
    artistSelect[1].src = './images/product/artist_02.jpg';
});

artistSelect[2].addEventListener('mouseover',function(){
    artistSelect[2].src = './images/product/artist_06.jpg';
});
artistSelect[2].addEventListener('mouseout',function(){
    artistSelect[2].src = './images/product/artist_03.jpg';
});


const bestSwiper = new Swiper(best, {
    slidesPerView: 4,
    spaceBetween: 20,
})
const heroBnrSwiper = new Swiper(heroBnr, {
    loop: true,
    scrollbar:{
        el:'.hero .scroll',
    },
    pagination:{
        el:'.hero .page',
        type:'fraction',
        renderFraction:function(current, total){
            console.log(current, total);
            let customPage = `<span class=${current}></span>`;
            customPage += `<span></span>`;
            customPage += `<span class=${total}></span>`;
            return customPage;
        },
    },
    navigation:{
        prevEl:'.hero .prev',
        nextEl:'.hero .next',
    },
})
const comingSwiper = new Swiper(coming, {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
        el :'.coming_wrap .page',
        type:'fraction',
        renderFraction:function(current, total){
            console.log(current, total);
            let customPage = `<span class=${current}></span>`;
            customPage += `<span></span>`;
            customPage += `<span class=${total}></span>`;
            return customPage;
        }
    },
    navigation:{
        prevEl:'.coming_wrap .prev',
        nextEl:'.coming_wrap .next',
    },
    scrollbar:{
        el:'.coming_wrap .scroll'
    },
})
const newSwiper = new Swiper(newslide, {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    pagination:{
        el : '.new_wrap .page',
        type:'fraction',
        renderFraction:function(current, total){
            console.log(current, total);
            let customPage = `<span class=${current}></span>`;
            customPage += `<span></span>`;
            customPage += `<span class=${total}></span>`;
            return customPage;
        }
    },
    scrollbar:{
        el:'.new_wrap .scroll'
    },
})
const mdpickSwiper = new Swiper(mdpick, {
    loop:true,
    slidesPerView: 4,
    spaceBetween: 20,

})
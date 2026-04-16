// common.js
const topBnr = document.querySelector('.top_bnr_swiper .top_bnr');
const lnbSelct = document.querySelectorAll('.lnb a');
console.log(topBnr, lnbSelct[0],lnbSelct[1],lnbSelct[2] );

lnbSelct[0].addEventListener('mouseover', function(){
    lnbSelct[0].src = './images/common/search_on.svg';
});
lnbSelct[0].addEventListener('mouseout', function(){
    lnbSelct[0].src = './images/common/search.svg';
});

lnbSelct[1].addEventListener('mouseover', function(){
    lnbSelct[1].src = './images/common/cart_on.svg';
});
lnbSelct[1].addEventListener('mouseout', function(){
    lnbSelct[1].src = './images/common/cart.svg';
});

lnbSelct[2].addEventListener('mouseover', function(){
    lnbSelct[2].src = './images/common/user_on.svg';
});
lnbSelct[2].addEventListener('mouseout', function(){
    lnbSelct[2].src = './images/common/user.svg';
});

const topBnrSwiper = new Swiper(topBnr, {
    effect:'fade',
    loop:true,
    autoplay:{delay:2000,},
});

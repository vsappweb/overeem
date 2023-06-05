$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header-menu').removeClass('close');
        $('.arrow').removeClass('active');
        $('.header-sub-menu__list, .header-sub-sub-menu__list').removeClass('open');
        $('.header__burger, .header-menu, .logo, .logo__link').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header-menu__item').click(function (event) {
        $('.header-sub-menu__list').toggleClass('touch');
        
    });
});
$(document).ready(function () {
    $('.header-sub-sub-menu__link').click(function (event) {
        $('.header__burger, .header-menu, .logo, .logo__link').removeClass('active');
        $('body').removeClass('lock');
        $('.header-sub-sub-menu__link, .header-menu').addClass('close');
        document.getElementById("logo__link").setAttribute('href', '#');
    });
});

let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for (i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');

        });
    }
} else {
    body.classList.add('mouse');
}



const formop = document.getElementById('form');

function calculateFactorOp(event) {
    event.preventDefault();

    let old__corr = document.querySelector('#old__corr-op');
    let len__prod = document.querySelector('#len__prod-op');
    let sign = document.querySelector('#sign-op');
    let long__short = document.querySelector('#long__short-op');
    long__short = sign.value + long__short.value
    let length__change = Number(len__prod.value) + Number(long__short);
    let division = len__prod.value/length__change;
    division = division.toFixed(5)
    let multiplication = division*old__corr.value
    multiplication = multiplication.toFixed(5)
    console.log('довжина відрізняється на', long__short);
    console.log('реальна довжина', length__change);
    console.log('ділення', division);
    console.log('новий кор. фактор', multiplication);

    document.getElementById('in__here-op').innerHTML = 'Nieuwe factor: \n'+ (multiplication);
    
    alert('Nieuwe factor: \n'+ (multiplication));
}

formop.addEventListener('submit', calculateFactorOp);

const formrp = document.getElementById('form');

function calculateFactorRp(event) {
    event.preventDefault();

    let old__corr = document.querySelector('#old__corr-rp');
    let len__prod = document.querySelector('#len__prod-rp');
    let sign = document.querySelector('#sign-rp');
    let long__short = document.querySelector('#long__short-rp');
    long__short = sign.value + long__short.value

    let length__change = Number(len__prod.value) + Number(long__short);
    let subtraction = Number(len__prod.value) - Number(length__change);
    subtraction = subtraction.toFixed(2);
    let division = subtraction / len__prod.value;
    division = division.toFixed(8);
    let multiplication = Number(division)*100;
    multiplication = multiplication.toFixed(6);
    let addition;
    // if (multiplication< 0){
    //     addition = Math.abs(Number(old__corr.value)) - Math.abs(Number(multiplication));
    //     console.log('if1', Math.abs(Number(old__corr.value)));
    //     console.log('if2', Math.abs(Number(multiplication)));
    //     console.log('if3', addition);
    // } else {
    //    addition = Number(multiplication) + Number(old__corr.value);
    //    console.log('else', addition);
    // }
    addition = Number(multiplication) + Number(old__corr.value);
    console.log('старий кор фактор', old__corr.value);
    console.log('різниця', subtraction);
    console.log('реальна довжина', length__change);
    console.log('ділення', division);
    console.log('множення на 100', multiplication);
    console.log('новий кор фактор', addition);

    document.getElementById('in__here-rp').innerHTML = 'Nieuwe factor: \n'+ (addition);
    
    alert('Nieuwe factor: \n'+ (addition));
}

formrp.addEventListener('submit', calculateFactorRp);
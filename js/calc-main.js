const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header-menu');

menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});



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
    let plus__minus = document.querySelector('#pm-rp');

    old__corr = plus__minus.value + old__corr.value;

    long__short = sign.value + long__short.value;

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
    addition = Number(multiplication) + Number(old__corr);
    
    console.log('старий кор фактор', old__corr);
    console.log('різниця', subtraction);
    console.log('реальна довжина', length__change);
    console.log('ділення', division);
    console.log('множення на 100', multiplication);
    console.log('новий кор фактор', addition);

    document.getElementById('in__here-rp').innerHTML = 'Nieuwe factor: \n'+ (addition);
    
    alert('Nieuwe factor: \n'+ (addition));
}

formrp.addEventListener('submit', calculateFactorRp);
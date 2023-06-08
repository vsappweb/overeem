const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header-menu');
const body = document.querySelector('body');

menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
});



const formop = document.getElementById('form');

function calculateFactorOp(event) {
    event.preventDefault();

    let old__corr = document.querySelector('#old__corr-op');
    let len__prod = document.querySelector('#len__prod-op');
    let signop = document.querySelector('#sign-op');
    let long__shortop = document.querySelector('#long__short-op');
    long__shortop = signop.value + long__shortop.value;
    let length__change = Number(len__prod.value) + Number(long__shortop);
    let divisionop = len__prod.value/length__change;
    divisionop = divisionop.toFixed(5)
    let multiplication = divisionop*old__corr.value
    multiplication = multiplication.toFixed(5)
    console.log('довжина відрізняється на', long__shortop);
    console.log('реальна довжина', length__change);
    console.log('ділення', divisionop);
    console.log('новий кор. фактор', multiplication);

    document.getElementById('numerator').innerHTML = len__prod.value;
    document.getElementById('the-denominator').innerHTML = length__change;
    document.getElementById('old-factor').innerHTML = old__corr.value;
    document.getElementById('new-factor').innerHTML = multiplication;
    document.getElementById('line').style = 'display: block;';
    document.getElementById('multiply').style = 'display: block;';
    document.getElementById('equal').style = 'display: block;';
    
    document.getElementById('in__here-op').innerHTML = 'Nieuwe factor: \n'+ multiplication;
    
    //alert('Nieuwe factor: \n'+ (multiplication));
}

formop.addEventListener('submit', calculateFactorOp);

const formrp = document.getElementById('form');

function calculateFactorRp(event) {
    event.preventDefault();

    let old__corr = document.querySelector('#old__corr-rp');
    let len__prod = document.querySelector('#len__prod-rp');
    let signrp = document.querySelector('#sign-rp');
    let long__shortrp = document.querySelector('#long__short-rp');
    let plus__minus = document.querySelector('#pm-rp');

    old__corr = plus__minus.value + old__corr.value;

    long__shortrp = signrp.value + long__shortrp.value;

    let length__change = Number(len__prod.value) + Number(long__shortrp);
    length__change = length__change.toFixed(2);
    let subtraction = Number(len__prod.value) - Number(length__change);
    subtraction = subtraction.toFixed(2);
    let divisionrp = subtraction / len__prod.value;
    divisionrp = divisionrp.toFixed(10);
    let multiplication = Number(divisionrp)*100;
    multiplication = multiplication.toFixed(10);
    let addition;

    addition = Number(multiplication) + Number(old__corr);
    
    addition = addition.toFixed(6);

    console.log('старий кор фактор', old__corr);
    console.log('різниця', subtraction);
    console.log('реальна довжина', length__change);
    console.log('ділення', divisionrp);
    console.log('множення на 100', multiplication);
    console.log('новий кор фактор', addition);
    
    document.getElementById('operation-1').style = 'display: block;';
    document.getElementById('operation-2').style = 'display: block;';
    document.getElementById('reduced').innerHTML = len__prod.value;
    document.getElementById('subtractor').innerHTML = length__change;
    document.getElementById('the-denominator').innerHTML = length__change;
    document.getElementById('midle-factor-1').innerHTML = multiplication;
    document.getElementById('midle-factor-2').innerHTML = multiplication;
    document.getElementById('old-factor').innerHTML = old__corr;
    document.getElementById('new-factor').innerHTML = addition;
    document.getElementById('line').style = 'display: block;';
    document.getElementById('minus').style = 'display: block;';
    document.getElementById('multiply').style = 'display: block;';
    if (old__corr < 0) {
        document.getElementById('plus').style = 'display: block;';
        document.getElementById('bracket-1').style = 'display: block;';
        document.getElementById('bracket-2').style = 'display: block;';

    }
    else {
        document.getElementById('plus').style = 'display: none;';
        document.getElementById('bracket-1').style = 'display: none;';
        document.getElementById('bracket-2').style = 'display: none;';
    }

    document.getElementById('equal-1').style = 'display: block;';
    document.getElementById('equal-3').style = 'display: block;';

    document.getElementById('in__here-rp').innerHTML = 'Nieuwe factor: \n'+ (addition);
    
    //alert('Nieuwe factor: \n'+ (addition));
}

formrp.addEventListener('submit', calculateFactorRp);
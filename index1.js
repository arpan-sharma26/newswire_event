let res;
//let trigger;

const BtnTwo = document.getElementById('btn2');
BtnTwo.addEventListener('click',() => {
    res = "You selected 'Cost Involved'.";
    localStorage.setItem('valuePrint',res);
    window.location.assign('cost.html');
    
});


const BtnThree = document.getElementById('btn3');
BtnThree.addEventListener('click',() => {
    res = "You selected 'Making Survival friendly environment'.";
    localStorage.setItem('valuePrint',res);
    window.location.assign('making.html');
});

const BtnFour = document.getElementById('btn4');
BtnFour.addEventListener('click',() => {
    res = "You selected 'Lack of Sunlight'.";
    localStorage.setItem('valuePrint',res);
    window.location.assign('lack.html');
});

const BtnFive = document.getElementById('btn5');
BtnFive.addEventListener('click',() => {
    res = "You selected'In situ resource utilization'.";
    localStorage.setItem('valuePrint',res);
    window.location.assign('in.html');
});

// when button clicks

/*
if (document.getElementById('btn5').onclick == true) {
    res = "You selected'In situ resource utilization'.";
    localStorage.setItem('valuePrint',res);
    localStorage.setItem('triggerVal','4');
}
if (document.getElementById('btn4').onclick == true) {
    res = "You selected 'Lack of Sunlight'.";
    localStorage.setItem('valuePrint',res);
    localStorage.setItem('triggerVal','3');
}
if (document.getElementById('btn3').onclick == true) {
    res = "You selected 'Making Survival friendly environment'.";
    localStorage.setItem('valuePrint',res);
    localStorage.setItem('triggerVal','2');
}
if (document.getElementById('btn2').onclick == true) {
    res = "You selected 'Cost Involved'.";
    localStorage.setItem('valuePrint',res);
    localStorage.setItem('triggerVal','1');
}
*/
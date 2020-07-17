let res2;

const BtnTwo = document.getElementById('btn2');
BtnTwo.addEventListener('click',() => {
    res2 = "You selected 'A really big Rocket'";
    localStorage.setItem('valueCost',res2);
    window.location.assign('next.html');
});

const BtnThree = document.getElementById('btn3');
BtnThree.addEventListener('click',() => {
    res2 = "You selected 'Fuel'";
    localStorage.setItem('valueCost',res2);
    window.location.assign('next.html');
});

const BtnFour = document.getElementById('btn4');
BtnFour.addEventListener('click',() => {
    res2 = "You selected 'Resources'";
    localStorage.setItem('valueCost',res2);
    window.location.assign('next.html');
});

const BtnFive = document.getElementById('btn5');
BtnFive.addEventListener('click',() => {
    res2 = "You selected 'Equipment'";
    localStorage.setItem('valueCost',res2);
    window.location.assign('next.html');
});
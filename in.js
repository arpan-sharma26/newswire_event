let res5;

const BtnTwo = document.getElementById('btn2');
BtnTwo.addEventListener('click',() => {
    res5 = "You selected'Presence of water in form of frost'";
    localStorage.setItem('valueIn',res5);
    window.location.assign('next.html');
});

const BtnThree = document.getElementById('btn3');
BtnThree.addEventListener('click',() => {
    res5 = "You selected'Minerals and metal concentration'";
    localStorage.setItem('valueIn',res5);
    window.location.assign('next.html');
});

const BtnFour = document.getElementById('btn4');
BtnFour.addEventListener('click',() => {
    res5 = "You Selected'Nuclear Fission Reactors for power source'";
    localStorage.setItem('valueIn',res5);
    window.location.assign('next.html');
});

const BtnFive = document.getElementById('btn5');
BtnFive.addEventListener('click',() => {
    res5 = "You selected'Crops in Greenhouse environment'";
    localStorage.setItem('valueIn',res5);
    window.location.assign('next.html');
});
let res4;

const BtnTwo = document.getElementById('btn2');
BtnTwo.addEventListener('click',() => {
    res4 = "You selected 'Radiation Level'";
    localStorage.setItem('valueLack',res4);
    window.location.assign('next.html');
});

const BtnThree = document.getElementById('btn3');
BtnThree.addEventListener('click',() => {
    res4 = "You selected 'Power Source'";
    localStorage.setItem('valueLack',res4);
    window.location.assign('next.html');
});

const BtnFour = document.getElementById('btn4');
BtnFour.addEventListener('click',() => {
    res4 = "You selected 'Meteor Impacts'";
    localStorage.setItem('valueLack',res4);
    window.location.assign('next.html');
});

const BtnFive = document.getElementById('btn5');
BtnFive.addEventListener('click',() => {
    res4 = "You selected 'Frequent Harsh Storms'";
    localStorage.setItem('valueLack',res4);
    window.location.assign('next.html');
});
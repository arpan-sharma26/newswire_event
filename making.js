let res3;

const BtnTwo = document.getElementById('btn2');
BtnTwo.addEventListener('click',() => {
    res3 = "You selected'3D Printing technology";
    localStorage.setItem('valueMaking',res3);
    window.location.assign('next.html');
});

const BtnThree = document.getElementById('btn3');
BtnThree.addEventListener('click',() => {
    res3 = "You selected'Mechanism to grow Plants in space";
    localStorage.setItem('valueMaking',res3);
    window.location.assign('next.html');
});

const BtnFour = document.getElementById('btn4');
BtnFour.addEventListener('click',() => {
    res3 = "You selected'Bring a lot of Oxygen'";
    localStorage.setItem('valueMaking',res3);
    window.location.assign('next.html');
});

const BtnFive = document.getElementById('btn5');
BtnFive.addEventListener('click',() => {
    res3 = "You selected'Medical equipment'";
    localStorage.setItem('valueMaking',res3);
    window.location.assign('next.html');
});
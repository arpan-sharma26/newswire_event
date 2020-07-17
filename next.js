const next = document.getElementById('submit');
next.addEventListener('click',() => {
    window.location.assign('extra.html');
});


let result = (name) => {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

const btn = document.querySelector('#submit');
btn.addEventListener('click', (event) => {
    alert(`This is the list of checkboxes separated with commas:- \n ${result('test')}`);
});

$('.one').on('change', function() {
    if($('.one:checked').length > 6) {
        this.checked = false;
    }
 });
 

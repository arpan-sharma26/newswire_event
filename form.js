
let res1 = localStorage.getItem('valuePrint');
let res2 = localStorage.getItem('valueCost');
let res3 = localStorage.getItem('valueMaking');
let res4 = localStorage.getItem('valueLack');
let res5 = localStorage.getItem('valueIn');
let res6 = localStorage.getItem('valueExtra');

if (res1 === null){
    res1 = '';
}

if (res2 === null) {
    res2 = '';
}

if (res3 === null) {
    res3 = '';
}

if (res4 === null) {
    res4 = '';
}

if (res5 === null){
    res5 = '';
}

if (res6 === null) {
    res6 = '';
}

alert(`You chose the following options:-\n \n ${res1} \n ${res2} \n ${res3} \n ${res4} \n ${res5} \n ${res6}`);

localStorage.clear();

//let tri = localStorage.getItem('triggerVal');
//console.log(tri);

const scriptURL = "https://script.google.com/macros/s/AKfycbzW8W7rsvnU263rbxKKVfnUV8-SnqHjQImayk1dV0egMlp0L4I/exec"
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Participating..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})


/////////////
$(document).ready(function() {
    $("#word_count").on('keyup', function() {
        var words = this.value.match(/\S+/g).length;
        if (words > 1000) {
            // Split the string on first 200 words and rejoin on spaces
            var trimmed = $(this).val().split(/\s+/, 1000).join(" ");
            // Add a space at the end to keep new typing making new words
            $(this).val(trimmed + " ");
        }
        else {
            $('#display_count').text(words);
            $('#word_left').text(1000-words);
        }
    });
 }); 

 

/*
if (res1 === "You selected'In situ resource utilization'." && tri === '4') {
    alert(res1);
    localStorage.removeItem('valuePrint');
    localStorage.removeItem('triggerVal');
} 

if (res1 === "You selected 'Lack of Sunlight'." && tri === '3') {
    alert(res1);
    localStorage.removeItem('valuePrint');
    localStorage.removeItem('triggerVal');
}

if (res1 === "You selected 'Making Survival friendly environment'." && tri === '2') {
    alert(res1);
    localStorage.removeItem('valuePrint');
    localStorage.removeItem('triggerVal');
}

if (res1 === "You selected 'Cost Involved'." && tri === '1') {
    alert(res1);
    localStorage.removeItem('valuePrint');
    localStorage.removeItem('triggerVal');
}
*/



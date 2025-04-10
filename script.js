var display = document.querySelector('.display');
var button = document.querySelectorAll('button');
var string = "";
var arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            display.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = '';
            display.value = string;
        }
        else if (e.target.innerHTML == 'Del') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }
          else {
            string += e.target.innerHTML;
            display.value = string;
        }
    })
})
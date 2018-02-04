window.onload = function () {
    var buttons = document.getElementsByTagName('span'),
      args = document.querySelectorAll('.result p')[0],
      result = document.querySelectorAll('.result strong')[0],
      clear = document.getElementsByClassName('clear')[0];

    for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML === '=') {
      buttons[i].addEventListener("click", calculate(i));
    } else {
      buttons[i].addEventListener("click", addValue(i));
    }
    }

    clear.onclick = function () {
    result.innerHTML = '';
    args.innerHTML = '';
    };

    function addValue(i) {
    return function () {

      args.innerHTML += buttons[i].innerHTML;

    };
    }

    function calculate(i) {
    return function () {
        var final_res = args.innerHTML;


      result.innerHTML = eval(final_res);
    };
    }

    $my_datepicker = $('.demo');

$my_datepicker.datepicker({
  next_button: '&gt;',
  prev_button: '&lt;'
});

$my_datepicker.setStartDate({
  year: 2015,
  // jquery.datepicker accepts first month as 1
  // (built-in Date() class accepts first month as 0)
  month: 1,
  day: 3
});
  };

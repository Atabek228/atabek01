function insert(number) {
    document.form.textview.value =
    document.form.textview.value + number;
}

function clean() {
    document.form.textview.value = "";
}

function deleteP() {
    let number = document.form.textview.value;
    document.form.textview.value = number.substring(0,  number.length-1)
}

function calculate() {
    let number = document.form.textview.value;
    if (number) {
        document.form.textview.value = eval(number).toFixed(1)
    }
}

function square() {
    let number = document.form.textview.value;
    if (number) {
        document.form.textview.value = number * number
    }
}
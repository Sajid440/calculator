function main(value) {
    document.getElementById("display").value += value
}
function calculate() {
    let a = document.getElementById("display").value;
    let result;
    try {
        result = eval(a)
    }
    catch (error) {
        result = "error"
        document.getElementById("display").style.color = "red"
    }
    document.getElementById("display").value = result;
}


function clearDisplay() {
    document.getElementById("display").value = "";
}

function del() {
    document.getElementById("display").value = display.value.toString().slice(0, -1);
}

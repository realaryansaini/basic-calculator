let btns = document.querySelectorAll(".btn")
let input = document.getElementsByTagName("input")[0]

let input_value = ""


const input_changing =()=>{
    input_value = input.value
}

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        input_value = input.value
        input.value = eval(input_value)
        input_value = eval(input_value).toString()
    }
});


document.querySelector(".clear").addEventListener("click", () => {
    input_value = ""
    input.value = ""
})


document.querySelector(".del").addEventListener("click", () => {
    input_value = input_value.slice(0, -1)
    input.value = input_value
})


btns.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.innerText != "=") {
            input_value = input_value + button.value
            input.value = input_value

        } else {
            input.value = eval(input_value)
            input_value = eval(input_value).toString()

        }
    })
})




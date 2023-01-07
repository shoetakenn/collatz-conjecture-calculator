let calculatedNumbers = []
let calculateBtn = document.getElementById("calculate-btn")
let number = parseInt(document.getElementById("input-el").value)
let error = document.getElementById("err")
let results = document.getElementById("results")
let numberCounter = document.getElementById("number-counter")
let loading = document.getElementById("loading")
function render(num) {
    number = parseInt(document.getElementById("input-el").value)
    calculatedNumbers = [number]
    loading.style.display = "block"
    results.textContent = ""
    console.log(calculatedNumbers)
    for (i = 0; i < 2000; i += 1) {
    if (num === 1 ) {
        let totalNumbers = calculatedNumbers.length
        console.log("infinite loop")
        numberCounter.textContent = `Calculated for ${totalNumbers} iterations`
        loading.style.display = "none"
        return
    } else if (num % 2 === 0) {
        num = num / 2
        calculatedNumbers.push(num)
        results.textContent += num + " > "
    } else if (num % 2 === 1){
        num = 3 * num + 1
        calculatedNumbers.push(num)
        results.textContent += num + " > "
    }
    }
}
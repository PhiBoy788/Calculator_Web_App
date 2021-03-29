let displayValue = ""
let calcNum1 = null
let calcNum2 = null
let runningTotal = null
let operation = null
const operators = ["+","-","/","*"]

document.addEventListener('keydown', function (event) {
    key = Number(event.key)
    if (Number.isInteger(key)) {
      numGetter(key)
    }
    if (operators.includes(event.key)){
        numSaver(event.key)
    }
    if(event.key === "=" || event.key === "Enter"){
        operate()
    }
    if(event.key === "c" || event.key === "C"){
        clearAll()
    }
  });


function clearAll(){
    displayValue = ""
    calcNum1 = null
    calcNum2 = null
    runningTotal = null
    operation = null
    document.getElementById("result").innerHTML = displayValue
}
function numGetter(num){
    console.log(num)
    displayValue += num
    document.getElementById("result").innerHTML = displayValue
}

function numSaver(operatorInput) {
    if (runningTotal){
        calcNum2 = Number(displayValue)
    }else{
        calcNum1 = Number(displayValue)
    }
    displayValue = ""
    document.getElementById("result").innerHTML = 0
    operation = operatorInput
}

function add (num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
	result = num1 + num2
    document.getElementById("result").innerHTML = result
	
}

function subtract (num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
	result = num1 - num2
    document.getElementById("result").innerHTML = result
}

function multiply(num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
	result = num1 * num2
    document.getElementById("result").innerHTML = result
}

function divide(num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    if (num1 == 0 || num2 == 0){
        alert("Can't let you do that, Starfox")
        clearAll()
        return 1
    }
	result = num1 / num2
    document.getElementById("result").innerHTML = result

}

function sumList(numList) {
	total = 0
	for (i = 0; i < numList.length; i++){
		total += numList[i]
	}
	return total
}

function multiplyList(numList) {
	total = 0
	for (i = 1; i < numList.length; i++) {
		if (i == 1){
			total += numList[0] * numList[1]
		}else{
			total = total * numList[i]
		}
	}
	return total
}
function power(num1,num2) {
	total = 0
	for (i = 1 ; i < num2; i++) {
		if (total == 0) {
			total = num1 * num1
		}else{
			total = total * num1
		}
	}
return total

}

function factorial(num) {
	num = Number(num)
	total = 1
	if (num == 0){
		return 1
	}else{
		for(i = 1; i < num; i++){
			total += total * i
		}
	}
	return total
	
}

function runningOrNot(){
    if(runningTotal){
        operate()
    }
}

function operate(){
    if(runningTotal){
        calcNum1 = runningTotal
    }
    calcNum2 = Number(displayValue)
    if(operation == "+"){

        add(calcNum1,calcNum2)
    }else if(operation == "-"){
        subtract(calcNum1,calcNum2)
    }else if (operation == "*"){
        multiply(calcNum1,calcNum2)
    }else if (operation== "/") {
        divide(calcNum1,calcNum2)
    }
    runningTotal = document.getElementById("result").innerHTML
}
function add (num1, num2) {
	return num1 + num2
	
}

function subtract (num1, num2) {
	return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
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

function(operator, num1, num2){
    operator(num1,num2)
}
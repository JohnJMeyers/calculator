const buttons = document.querySelectorAll('.calculator span')

for (let i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function (takesButton) {

		let input = document.querySelector('.screen')
		let inputValue = input.innerHTML
		let buttonValue = this.innerHTML

		if(buttonValue === 'C') {
			input.innerHTML = ''
		}
		else if (buttonValue === '=') {
			let equation = inputValue
			equation = equation.replace(/x/g, '*')
			if(equation){
				input.innerHTML = eval(equation)
			}
		}
		else {
			input.innerHTML += buttonValue
		}
	}
}

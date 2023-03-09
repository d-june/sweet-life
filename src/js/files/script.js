// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


const container = document.querySelector('.constructor-main__container'),
	calculate = document.querySelector('.total-constructor-main__calculate');


if (calculate) {

calculate.addEventListener("click", () => {
	calculateOrder();
	showOrderButton();
});

container.addEventListener("click", inputChecked);


function calculateOrder() {

	const decorCheckboxes = document.querySelectorAll('.constructor-main__decor input:checked'),
		decorSelects = document.querySelectorAll('.spollers-constructor-main__option');

	let sumOfCheckedCheckboxes = 0;
	let sumOfSelectedOptions = 0;

	let sumOfWeightSelectedOptions = 0;

	let checkboxesContent = '';
	let selectsContent = '';


	decorSelects.forEach(select => {
		if (select.selected) {
			sumOfSelectedOptions = Number(sumOfSelectedOptions) + Number(select.dataset.price);
			if(select.value) {
				selectsContent = `${selectsContent} ${select.value} <br>`;
			}
			if (select.dataset.weight) {
				sumOfWeightSelectedOptions = Number(sumOfWeightSelectedOptions) + Number(select.dataset.weight);
			}
		}
	})
	
	decorCheckboxes.forEach(checkbox => {
		sumOfCheckedCheckboxes = Number(sumOfCheckedCheckboxes) + Number(checkbox.dataset.price);
		if(checkbox.value) {
			checkboxesContent = `${checkboxesContent} ${checkbox.value} <br>`;
		}
	})

	printTotalPrice(sumOfCheckedCheckboxes, sumOfSelectedOptions);
	printTotalWeight(sumOfWeightSelectedOptions);
	printTotalCheckboxAndSelectsContent(checkboxesContent, selectsContent);
}

function inputChecked() {
	const cakeChecked = document.querySelector('.spollers-constructor-main__cake input:checked'),
		creamChecked = document.querySelector('.spollers-constructor-main__cream input:checked'),
		buttons = document.querySelectorAll('.spollers-constructor-main__button');
	buttons.forEach(button => {
		button.classList.remove('active-popup');
	})
	if (cakeChecked) {
		cakeChecked.parentNode.classList.add('active-popup');
	}
	if (creamChecked) {
		creamChecked.parentNode.classList.add('active-popup');
	}
}

function showOrderButton() {
	const odrerButton = document.querySelector('.total-constructor-main__order');
	odrerButton.classList.add('show-button');
}

function printTotalPrice(sumOfCheckedCheckboxes, sumOfSelectedOptions) {
	const cake = document.querySelector('.spollers-constructor-main__cake input:checked'),
		cream = document.querySelector('.spollers-constructor-main__cream input:checked'),
		totalPrice = document.querySelector('.total-constructor-main__price'),
		totalPricePopup = document.querySelector('.total-form-popup__cost');

	const cakePrice = Number(cake.dataset.price),
		creamPrice = Number(cream.dataset.price),
		startPrice = 2000;

	totalPrice.innerHTML = (startPrice + cakePrice + creamPrice + sumOfCheckedCheckboxes + sumOfSelectedOptions).toLocaleString() + " " + "₽";
	totalPricePopup.innerHTML = (startPrice + cakePrice + creamPrice + sumOfCheckedCheckboxes + sumOfSelectedOptions).toLocaleString() + " " + "₽";
}

function printTotalWeight(sumOfWeightSelectedOptions) {
	const cake = document.querySelector('.spollers-constructor-main__cake input:checked'),
		cream = document.querySelector('.spollers-constructor-main__cream input:checked'),
		totalWeight = document.querySelector('.total-constructor-main__weight'),
		totalWeightPopup = document.querySelector('.total-form-popup__weight'),
		totalCakeContent = document.querySelector('.total-form-popup__content_cake'),
		totalCreamContent = document.querySelector('.total-form-popup__content_cream');

	const cakeWeight = Number(cake.dataset.weight),
		creamWeight = Number(cream.dataset.weight),
		cakeContent = cake.value,
		creamContent = cream.value;


	totalWeight.innerHTML = `${(cakeWeight + creamWeight + sumOfWeightSelectedOptions).toFixed(2)} кг.`;
	totalWeightPopup.innerHTML = `${(cakeWeight + creamWeight + sumOfWeightSelectedOptions).toFixed(2)} кг.`;
	totalCakeContent.innerHTML = `${cakeContent}`;
	totalCreamContent.innerHTML = `${creamContent}`;
}

function printTotalCheckboxAndSelectsContent(checkboxesContent, selectsContent) {
	const totalContentCheckbox = document.querySelector('.total-form-popup__content_checkbox'),
	totalContentSelect = document.querySelector('.total-form-popup__content_select');

	totalContentCheckbox.innerHTML = `${checkboxesContent}`;
	totalContentSelect.innerHTML = `${selectsContent}`;

}

let contentForMail = [];
function getContentForMail () {
	const cakeName = document.querySelector('.total-form-popup__content_cake'),
	creamName = document.querySelector('.total-form-popup__content_cream'),
	selectsChoose = document.querySelector('.total-form-popup__content_select'),
	checkboxesChoose = document.querySelector('.total-form-popup__content_checkbox'),
	totalPrice = document.querySelector('.total-form-popup__cost'),
	totalWeight = document.querySelector('.total-form-popup__weight');

	contentForMail.push(cakeName.textContent);
	contentForMail.push(creamName.textContent);
	contentForMail.push(selectsChoose.textContent);
	contentForMail.push(checkboxesChoose.textContent);
	contentForMail.push(totalPrice.textContent);
	contentForMail.push(totalWeight.textContent);
	return contentForMail
}

}


// document.querySelector('.form-popup__body').addEventListener('submit', (e)=> {
// 	e.preventDefault();
// 	getContentForMail();
// 	let self = e.currentTarget;
// 	let formData = new FormData(self); // Объект, в котором будет храниться все, что будет передаваться в дформой
// 	let name = self.querySelector('[name="Имя"]').value;
// 	let tel = self.querySelector('[name="Телефон"]').value;
// 	let address = self.querySelector('[name="Адрес"]').value;
// 	formData.append('Товары', JSON.stringify(contentForMail));
// 	formData.append('Имя', name);
// 	formData.append('Телефон', tel);
// 	formData.append('Адрес', address);
	
// 	console.log(formData);
// 	let xhr = new XMLHttpRequest();

// 	xhr.onreadystatechange = function() {
// 		if (xhr.readyState === 4) {
// 			if (xhr.status === 200) {
// 				console.log('Отправлено');
// 			}
// 		}
// 	}

// 	xhr.open('POST', 'sendorder.php', true);
// 	xhr.send(formData);

// 	self.reset();
// })


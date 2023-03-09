const picker = datepicker('.calendar-order-ready', {
	formatter: (input, date, instance) => {
		const value = date.toLocaleDateString()
		input.value = value
	},
	minDate: new Date(new Date().getTime() + 259200000),
	customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	customOverlayMonths: ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'],
	overlayPlaceholder: 'Год',
	overlayButton: "Выбрать"
});

const pickerConstructor = datepicker('.calendar-constructor', {
	formatter: (input, date, instance) => {
		const value = date.toLocaleDateString()
		input.value = value
	},
	minDate: new Date(new Date().getTime() + 259200000),
	customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	customOverlayMonths: ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'],
	overlayPlaceholder: 'Год',
	overlayButton: "Выбрать"
});




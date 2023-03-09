const orderProduct = document.querySelector('.product');

if (orderProduct) {
	orderProduct.addEventListener('click', (e) => {
		let target = e.target;
		if (target.classList.contains('product__buy')) {
			const popupProductBody = target.parentNode.parentNode,
				popupProductPrice = popupProductBody.querySelector('.product__price span').innerText,
				popupProductWeight = popupProductBody.querySelector('.product__weight span').innerText,
				productName = popupProductBody.querySelector('.product__title').innerText,
				orderPrice = document.querySelector('#order-ready-cost span'),
				orderWeight = document.querySelector('#order-ready-weight span'),
				orderText = document.querySelector('#order-ready-text span');
	
	
			orderText.innerText = `${productName}`;
			orderPrice.innerText = popupProductPrice + ' ' + 'руб.';
			orderWeight.innerText = popupProductWeight;
		}
	})
}





(function() {
	var localStorage = window.localStorage;
	var addBtn = document.getElementById('add');
	var content = document.getElementById('content');
	var mainRow = document.getElementById('main-row');

	// TODO: primero rellenar contenido en función del contenido de localstorage
	// TODO: añadir elementos al contenido de localstorage
	// TODO: modificar elementos existentes en localstorage
	// TODO: eliminar elementos del localstorage

	for (var i = 0; i < localStorage.length; i++) {
		console.log(localStorage.getItem(localStorage.key(i)));
	}

	var addItem = function(key, value) {
		localStorage.setItem(key, value);
		// TODO: pintar de nuevo listado de elementos
		// TODO: generar estructura de elemento
		var element = document.createElement('p');
		element.innerHTML = value;
		// Añadir elemento justo antes de la fila de inputs
		content.insertBefore(element, mainRow);
		return true;
	}

	// Añadir elementos al contenido
	addBtn.addEventListener('click', function(e) {
		e.preventDefault();
		var order = document.getElementsByName('order');
		var storageValue = document.getElementsByName('value');;
		addItem(order[0].value, storageValue[0].value);
	});
	// Añadir keyup event para guardar elementos al pulsar enter
	window.addEventListener('keyup', function(e) {
		if (e.keyCode === 13) {
			// trigger de click en boton de añadir
			addBtn.click();
		}
	});
}());
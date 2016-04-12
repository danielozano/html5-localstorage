(function() {
	var localStorage = window.localStorage;
	var addBtn = document.getElementById('add');
	var clearBtn = document.getElementById('clear');
	var content = document.getElementById('content');
	var containerRow = document.getElementById('container-row');

	// TODO: primero rellenar contenido en función del contenido de localstorage
	// TODO: modificar elementos existentes en localstorage
	// TODO: eliminar elementos del localstorage

	// pintar cada elemento dentro de un contenedor
	var renderItems = function(container) {
		for (var i = 0; i < localStorage.length; i++) {
			var element = document.createElement('p');
			var storageItem = localStorage.getItem(localStorage.key(i));

			console.log(storageItem);

			element.innerHTML = i + " - " + storageItem;
			containerRow.appendChild(element);
		}
	};

	renderItems(content);

	// Añadir el elemento a localstorage y pintarlo.
	var addItem = function(key, value) {
		localStorage.setItem(key, value);

		// TODO: generar estructura de elemento
		var element = document.createElement('p');
		element.innerHTML = value;
		containerRow.appendChild(element);
	};

	// Añadir botón para limpiar
	clearBtn.addEventListener('click', function(e) {
		e.preventDefault();
		localStorage.clear();
		containerRow.innerHTML = '';
	});

	// Añadir elementos al contenido
	addBtn.addEventListener('click', function(e) {
		e.preventDefault();

		var order = document.getElementsByName('order');
		var storageValue = document.getElementsByName('value');
		var orderValue = order[0].value
		
		if (orderValue === '') {
			// obtener el la última key
			orderValue = localStorage.length;
		}

		addItem(orderValue, storageValue[0].value);

		order[0].value = null;
		storageValue[0].value = null;
	});

	// Añadir keyup event para guardar elementos al pulsar enter
	window.addEventListener('keyup', function(e) {
		if (e.keyCode === 13) {
			// trigger de click en boton de añadir
			addBtn.click();
		}
	});
}());
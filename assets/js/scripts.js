(function() {
	var localStorage = window.localStorage;
	var addBtn = document.getElementById('add');
	var clearBtn = document.getElementById('clear');
	var content = document.getElementById('content');
	var containerRow = document.getElementById('container-row');
	var list = [];

	if (localStorage.getItem('list') != undefined &&
		localStorage.getItem('list') != '') {
		console.log(localStorage.getItem('list'));
		list = JSON.parse(localStorage.getItem('list'));
	};

	// TODO: modificar elementos existentes en localstorage
	// TODO: eliminar elementos del localstorage

	// pintar cada elemento dentro de un contenedor
	var renderItems = function(container) {
		// obtener el array contenido.
		if (list == undefined) {
			return;
		}
		
		// limpiar contenido y pintarlo de nuevo
		container.innerHTML = '';
		// TODO: este bucle no sirve para recorrer los elementos de un objeto pls... guardar un array dentro de un objeto actualizar dicho array.
		for (var i = 0; i < list.length; i++) {
			var element = document.createElement('p');

			// añadir estructura HTML a los elementos
			element.className += 'storage-item';
			element.innerHTML = "<span class='index'>" + i + "</span> <span class='body'>" + list[i] + "</span><button class='delete-item'>X</button>";

			container.appendChild(element);
		};
		bindDeleteButtons();
	};

	var bindDeleteButtons = function() {
		var deleteButtons = document.getElementsByClassName('delete-item');
		
		for (var i = 0; i < deleteButtons.length; i++) {
			deleteButtons[i].addEventListener('click', function(e) {
				// obtener el padre
				var parent = this.parentNode;
				var childrens = parent.childNodes;
				var index = list.indexOf(childrens[2].innerText);

				list.splice(index, 1);
				
				console.log(list);
				localStorage.setItem('list', JSON.stringify(list));
				renderItems(containerRow);
			});
		}
	};

	// Añadir botón para limpiar
	clearBtn.addEventListener('click', function(e) {
		e.preventDefault();
		list = [];
		localStorage.setItem('list', list);
		containerRow.innerHTML = '';
	});

	// Añadir elementos al contenido
	addBtn.addEventListener('click', function(e) {
		e.preventDefault();

		var order = document.getElementsByName('order');
		var storageValue = document.getElementsByName('value');
		var orderValue = order[0].value
		
		list.push(storageValue[0].value);

		localStorage.setItem('list', JSON.stringify(list));

		renderItems(containerRow);

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

	// Eliminar individualmente el contenido de los elementos
	
	renderItems(containerRow);
}());
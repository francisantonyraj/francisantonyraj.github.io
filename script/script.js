		// Create a table inside the iframe
		var frame = document.getElementById('frame');
		frame.onload = function() {
			var table = frame.contentDocument.createElement('table');
			var thead = frame.contentDocument.createElement('thead');
			var tbody = frame.contentDocument.createElement('tbody');

			var headerRow = thead.insertRow();
			var headers = ['Name', 'Age', 'City'];
			for (var i = 0; i < headers.length; i++) {
				var headerCell = headerRow.insertCell(i);
				headerCell.textContent = headers[i];
			}

			var data = [
				{ name: 'John', age: 30, city: 'New York' },
				{ name: 'Jane', age: 25, city: 'Los Angeles' },
				{ name: 'Bob', age: 40, city: 'Chicago' },
			];
			for (var i = 0; i < data.length; i++) {
				var dataRow = tbody.insertRow();
				var nameCell = dataRow.insertCell(0);
				nameCell.textContent = data[i].name;
				var ageCell = dataRow.insertCell(1);
				ageCell.textContent = data[i].age;
				var cityCell = dataRow.insertCell(2);
				cityCell.textContent = data[i].city;
			}

			table.appendChild(thead);
			table.appendChild(tbody);
			frame.contentDocument.body.appendChild(table);
		}
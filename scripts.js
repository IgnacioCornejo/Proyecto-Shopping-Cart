fetch('https://restcountries.com/v3.1/all')
			.then(response => response.json())
			.then(data => {
				const countries = data.map(country => ({
					name: country.name.common,
					code: country.cca2
				}));

				const select = document.getElementById('countries');
				countries.forEach(country => {
					const option = document.createElement('option');
					option.value = country.code;
					option.textContent = country.name;
					select.appendChild(option);
				});
			});
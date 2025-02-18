document.addEventListener('DOMContentLoaded', function () {
		const dateInputs = document.querySelectorAll('.custom-date-input');
	dateInputs.forEach(dateInput => {
			const hiddenInput = dateInput.nextElementSibling; 

			dateInput.addEventListener('click', () => {
					// Позиционируем календарь рядом с кастомным элементом
					const rect = dateInput.getBoundingClientRect();
					hiddenInput.style.position = 'fixed';
					hiddenInput.style.top = `${rect.bottom + window.scrollY}px`;
					hiddenInput.style.left = `${rect.left + window.scrollX}px`;
					hiddenInput.style.opacity = '0';
					hiddenInput.style.height = '0';
					hiddenInput.style.width = '0';
					hiddenInput.style.border = 'none';

					hiddenInput.showPicker(); 
			});

			hiddenInput.addEventListener('change', () => {
					const selectedDate = hiddenInput.value;
					dateInput.querySelector('.date-value').textContent = selectedDate;
			});
	});

	
	const customSelects = document.querySelectorAll('.custom-select');
	customSelects.forEach(select => {
			const selectedOption = select.querySelector('.selected-option');
			const optionsList = select.nextElementSibling; 
			const hiddenSelect = optionsList.nextElementSibling; 

			select.addEventListener('click', (e) => {
					e.stopPropagation(); 
					optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
					select.setAttribute('aria-expanded', optionsList.style.display === 'block');
			});

			optionsList.querySelectorAll('.option').forEach(option => {
					option.addEventListener('click', () => {							
							selectedOption.textContent = option.textContent;
							optionsList.style.display = 'none';
							select.setAttribute('aria-expanded', false);
						
							const selectedValue = option.textContent;
							const optionElement = Array.from(hiddenSelect.options).find(opt => opt.text === selectedValue);
							if (optionElement) {
									optionElement.selected = true;
							}
					});
			});

			
			document.addEventListener('click', () => {
					optionsList.style.display = 'none';
					select.setAttribute('aria-expanded', false);
			});
	});


const timeInputs = document.querySelectorAll('.custom-time-input');
timeInputs.forEach(timeInput => {
    const hiddenInput = timeInput.nextElementSibling;

    timeInput.addEventListener('click', () => {
        const rect = timeInput.getBoundingClientRect();
        hiddenInput.style.position = 'fixed';
        hiddenInput.style.top = `${rect.bottom + window.scrollY}px`;
        hiddenInput.style.left = `${rect.left + window.scrollX}px`;
        hiddenInput.showPicker();
    });

    hiddenInput.addEventListener('change', () => {
        timeInput.querySelector('.time-value').textContent = hiddenInput.value;
    });
});


applyButton.addEventListener('click', () => {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    
    console.log('Временной диапазон:', { startTime, endTime });
    
});


	
	const applyButton = document.querySelector('.apply-button');
	applyButton.addEventListener('click', () => {
			const startDate = document.getElementById('startDate').value;
			const endDate = document.getElementById('endDate').value;
			const selectedTeam = document.getElementById('teamSelect').value;
			const selectedCallType = document.getElementById('callTypeSelect').value;

			console.log('Применены фильтры:', {
					startDate,
					endDate,
					selectedTeam,
					selectedCallType,
			});

			
	});
});
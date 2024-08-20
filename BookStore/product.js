
        // Get the elements
        const counterValue = document.getElementById('counter-value');
        const plusBtn = document.getElementById('plus-btn');
        const minusBtn = document.getElementById('minus-btn');

        // Initial counter value
        let counter = 0;

        // Add event listener for the plus button
        plusBtn.addEventListener('click', () => {
            counter++;
            counterValue.innerText = counter;
        });

        // Add event listener for the minus button
        minusBtn.addEventListener('click', () => {
            counter--;
            counterValue.innerText = counter;});

$(document).ready(function() {
    $('#currentYear').text(new Date().getFullYear());
});

$(document).ready(function() {
    if ($('#guessInput').length) {
        let secretNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;
        const messageEl = document.getElementById('message');
        const attemptsEl = document.getElementById('attemptsCount');
        const inputEl = document.getElementById('guessInput');
        const buttonEl = document.getElementById('guessButton');
        const resetBtn = document.getElementById('resetButton');

        function checkGuess() {
            const guess = parseInt(inputEl.value);

            if (isNaN(guess) || guess < 1 || guess > 100) {
                messageEl.textContent = 'Write a number between 1 and 100';
                messageEl.className = 'fw-bold fs-5 mt-3 text-warning';
                return;
            }

            attempts++;
            attemptsEl.textContent = attempts;
            inputEl.value = ''; 

            if (guess === secretNumber) {
                messageEl.textContent = `🎉 You guessed ${secretNumber} in ${attempts} times`;
                messageEl.className = 'fw-bold fs-5 mt-3 text-success';
                inputEl.disabled = true;
                buttonEl.disabled = true;
                resetBtn.classList.remove('d-none');
            } else if (guess < secretNumber) {
                messageEl.textContent = 'Too small, try again';
                messageEl.className = 'fw-bold fs-5 mt-3 text-danger';
            } else {
                messageEl.textContent = 'Too big, try again';
                messageEl.className = 'fw-bold fs-5 mt-3 text-danger';
            }
        }

        function resetGame() {
            secretNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            attemptsEl.textContent = attempts;
            messageEl.textContent = 'Wainting for your number';
            messageEl.className = 'fw-bold fs-5 mt-3 text-secondary';
            inputEl.disabled = false;
            buttonEl.disabled = false;
            resetBtn.classList.add('d-none');
            inputEl.value = '';
        }

        buttonEl.addEventListener('click', checkGuess);
        resetBtn.addEventListener('click', resetGame);
        
        inputEl.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !buttonEl.disabled) {
                e.preventDefault();
                checkGuess();
            }
        });
    }
});

const state = {
    view: {
        squares: document.querySelectorAll('.square'),
        timeLeft: document.querySelector('#time-left'),
        score: document.querySelector('#score'),
        lives: document.querySelector('.menu-lives h2'),
    },
    values: {
        gameVelocity: 1000,
        hitPosition: null,
        result: 0,
        currentTime: 60,
        lives: 3,
    },
    actions: {
        timerId: null,
        countDownTimerId: null,
    },
};

function playSound() {
    let audio = new Audio('./src/audios/hit.m4a');
    audio.volume = 0.2;
    audio.play();
}

function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0 || state.values.lives <= 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(state.actions.timerId);
    clearInterval(state.actions.countDownTimerId);
    const message =
        state.values.lives <= 0
            ? 'Game Over! Você perdeu todas as vidas!'
            : `Game Over! Sua pontuação final foi: ${state.values.result}`;
    alert(message);
}

function updateLivesDisplay() {
    state.view.lives.textContent = `x${state.values.lives}`;
}

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove('enemy');
    });

    const randomNumber = Math.floor(Math.random() * 9);
    const randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add('enemy');
    state.values.hitPosition = randomSquare.id;
}

function moveEnemy() {
    state.actions.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound();
            } else {
                // Clique errado, perde vida
                state.values.lives--;
                updateLivesDisplay();
                if (state.values.lives <= 0) {
                    endGame();
                }
            }
        });
    });
}

function initialize() {
    updateLivesDisplay();
    moveEnemy();
    addListenerHitBox();
    state.actions.countDownTimerId = setInterval(countDown, 1000);
}

initialize();

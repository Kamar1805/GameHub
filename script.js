function loadGame(game) {
    document.getElementById('game-menu').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    document.getElementById('game-frame').src = `games/${game}.html`;
}

function exitGame() {
    document.getElementById('game-menu').style.display = 'block';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('game-frame').src = '';
}

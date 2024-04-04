// Récupération des boutons et de la zone de message
const ouiBtn = document.getElementById('ouiBtn');
const nonBtn = document.getElementById('nonBtn');
const messageBox = document.getElementById('messageBox');

// Ajout d'écouteurs d'événements aux boutons
ouiBtn.addEventListener('click', () => {
    showMessage("Merci pour votre retour!");
});

nonBtn.addEventListener('click', () => {
    showMessage("Nous sommes désolés nous y travaillerons d'avantage!");
});

// Fonction pour afficher un message dans la zone de message
function showMessage(message) {
    messageBox.textContent = message;
}

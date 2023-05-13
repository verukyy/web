document.addEventListener('contextmenu', event => event.preventDefault());
const images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
  images[i].setAttribute('draggable', 'false');
}

// pobieramy element, do którego będziemy dodawać komunikat
const container = document.getElementById('container');

// tworzymy element div dla komunikatu
const messageBox = document.createElement('div');
messageBox.classList.add('message-box');

// tworzymy element p dla treści komunikatu
const messageText = document.createElement('p');
messageText.textContent = 'Lubię placki!';

// tworzymy przycisk do zamykania komunikatu
const closeButton = document.createElement('button');
closeButton.textContent = 'Zamknij';
closeButton.addEventListener('click', () => {
  messageBox.style.display = 'none'; // ukrywamy komunikat po kliknięciu przycisku zamknięcia
});

// dodajemy treść i przycisk do elementu komunikatu
messageBox.appendChild(messageText);
messageBox.appendChild(closeButton);

// dodajemy komunikat do kontenera
container.appendChild(messageBox);

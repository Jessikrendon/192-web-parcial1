var messagesArray = document.querySelectorAll ('.message');

function handleMessageEnter(){
    var message = message.getAttribute('data-text');
   
    var container = document.createElement('div');
    container.classList.add('message__container');
    container.innerHTML = `
        <p>${text}</p>
    `;
    message.appendChild(container);
}
//popover.addEventListener('click', handlePopoverClick);
//aqupi falta algooo


//fncion que obtiene el texto escrito en el input
function lemessage() {
    if (e.keyCode == 13) {
        var leText = document.getElementsByClassName('.write');
leText.appendChild();
    }
}
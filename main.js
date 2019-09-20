//para cuando haga el array de mensajes
var messagesArray = document.querySelectorAll ('.message');


//fncion que obtiene el texto escrito en el input y se lo agrega a .message
function handleWrite() {
    if (e.keyCode == 13) {
        var leText = document.getElements(lemesage);
        leText.appendChild('.message');
    }
    console.log(body);
}
message.addEventListener( );


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





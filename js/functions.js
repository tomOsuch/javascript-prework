function printMessage(message) {
    let div = document.createElement('div');
    div.innerHTML = message;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}
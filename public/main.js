var socket = io();
  var name = prompt('What is your name ?'); 
  var form = document.getElementById('form');
  var input = document.getElementById('input');

socket.emit('user name',name);
socket.on('user-joined', name => {
create(name)
})

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', name + ': ' + input.value);
      input.value = '  ';
    }
  });

    socket.on('chat message', function(msg) {
    var item = document.createElement('div');
    item.classList.add('cover');
    messages.appendChild(item);
    var item2 = document.createElement('div');
    item2.classList.add('chat');
    item2.textContent = msg;
    item.appendChild(item2);
    window.scrollTo(0, document.getElementById('messages').scrollHeight);
  });



const create = (uname) => {
var item = document.createElement('div');
    item.classList.add('cover');
    item.classList.add('right');
    messages.appendChild(item);
    var item2 = document.createElement('div');
    item2.classList.add('chat');
    item2.textContent = `${uname} joined the chat.`;
    item.appendChild(item2);
}



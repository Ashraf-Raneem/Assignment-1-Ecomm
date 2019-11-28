function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container'); 
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('inputText');

const name = prompt('What is your name?');

appendMessage("You Joined");
socket.emit("new user", name); 


socket.on('chat-message', data=> {
    appendMessage(`${data.name}: ${data.message}`); 
})

socket.on('user-connected', name=> {
    appendMessage(`${name} connected`); 
})

socket.on('user-disconnected', name=> {
    appendMessage(`${name} disconnected`); 
})

messageForm.addEventListener('submit' , e => {
    e.preventDefault(); 
    const message = messageInput.value
    appendMessage(`You : ${message}`); 
    socket.emit('send-chat-message', message)
    messageInput.value = ''; 
})

function appendMessage (message) {
    const messageElement = document.createElement('div'); 
    messageElement.innerHTML = message; 
    messageContainer.append(messageElement); 
}
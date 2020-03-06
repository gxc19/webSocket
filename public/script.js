const inputText = document.getElementById("inputText")
const btn = document.getElementById("btn")
const messageList = document.getElementById("messages")

btn.addEventListener('click', () => {
    console.log("You are working")
    socket.emit('inputMessage', inputText.value)
})

const socket = io()


socket.on('message', (text) => {
    messageList.innerHTML += `<li>${text}</li>`
})
const password = prompt("Enter the password");

if(password == "tpbest"){

const socket = io("http://localhost:543");

function createMessage(  message, f){

	let container = document.getElementById("container");
	let msg = document.createElement("div");
	let text = document.createTextNode(message);
	msg.appendChild(text);
	msg.classList.add("message");
	msg.classList.add(f);
	container.appendChild(msg)

}

const messageInput = document.getElementById("message");
const form = document.getElementById("form");
form.addEventListener('submit', event=>{
event.preventDefault();
const message = messageInput.value;
createMessage(`you: ${message}`, "right");
socket.emit("send", message)
messageInput.value = "";

} );
let name = prompt("Enter your name");

createMessage("You joined", "right");

socket.emit("addNewMember", name);



socket.on("NewUserJoined", function(name){

	createMessage(`New user joined : ${name}`,"left");

});

socket.on("receive", data=>{

createMessage(`${data.name}: ${data.message}`, "left");

});
}

else{
document.querySelector("body").innerHTML = "<h1>Wrong Password</h1>"
}

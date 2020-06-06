const io = require("socket.io")(543);
const members = [];



io.on("connection" , (socket)=>{
console.log("Connected");
socket.on("addNewMember", name=>{

members[socket.id]= name;
console.log("New user joined:", name);

socket.broadcast.emit("NewUserJoined", name)

});

socket.on("send", function (msg){
	console.log(msg);
	socket.broadcast.emit("receive", {message:msg, name:members[socket.id]});
});

socket.on("disconnect", function(){
	console.log(members);
	delete members[socket.id];
	console.log("removed");
	console.log(members);
});


});


console.log("Listening............................");



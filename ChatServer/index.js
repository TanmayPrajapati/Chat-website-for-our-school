const io = require("socket.io")(543);
const members = [];



io.on("connection" , (socket)=>{
socket.on("addNewMember", name=>{

members[socket.id]= name;

socket.broadcast.emit("NewUserJoined", name)

});

socket.on("send", function (msg){
	socket.broadcast.emit("receive", {message:msg, name:members[socket.id]});
});

socket.on("disconnect", function(){
	delete members[socket.id];
});


});


console.log("Listening............................");



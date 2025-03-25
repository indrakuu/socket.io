module.exports = (io, socket) => {
    socket.on("chat_join", (room) => {
        socket.join(room);
        console.log(`User ${socket.id} joined chat ${room}`);
        socket.emit("joined", `User ${socket.id} joined chat ${room}`);
    });

    socket.on("chat_send", ({ room, sender, message }) => {
        if (!room || !sender || !message) {
            console.log("Invalid data received from client");
            return;
        }

        console.log(`Message from ${sender} to room ${room}: ${message}`);

        io.to(room).emit("chat_receive", { sender, message, room: room });

        console.log(`Message has been sent to room ${room}`);
    });

    socket.on("chat_read", ({ room, reader }) => {
        console.log(`User ${reader} read message in room ${room}`);

        io.to(room).emit("chat_read_status", { room, reader });
    });

    socket.on("chat_leave", (room) => {
        socket.leave(room);
        console.log(`User ${socket.id} left room ${room}`);
    });
};

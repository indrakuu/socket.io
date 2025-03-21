module.exports = (io, socket) => {
    socket.on("chat_join", (room) => {
        socket.join(room);
        console.log(`User ${socket.id} joined chat ${room}`);
        socket.emit("joined", `Kamu telah bergabung ke chat: ${room}`);
    });

    socket.on("chat_send", ({ room, sender, message }) => {
        if (!room || !sender || !message) {
            console.log("Data tidak lengkap.");
            return;
        }

        console.log(`Pesan dari ${sender} ke room ${room}: ${message}`);

        io.to(room).emit("chat_receive", { sender, message, room: room });

        console.log(`Pesan telah dikirim ke room ${room}`);
    });

    socket.on("chat_leave", (room) => {
        socket.leave(room);
        console.log(`User ${socket.id} left room ${room}`);
    });
};

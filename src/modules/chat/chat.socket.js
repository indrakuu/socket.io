module.exports = (socket) => {
    socket.on("join_room", (room) => {
        socket.join(room);
        console.log(`User ${socket.id} joined room ${room}`);
        socket.emit("joined", `Kamu telah bergabung ke room: ${room}`);
    });

    socket.on("send_message", ({ room, sender, message }) => {
        if (!room || !sender || !message) {
            console.log("Data tidak lengkap.");
            return;
        }

        console.log(`Pesan dari ${sender} ke room ${room}: ${message}`);

        io.to(room).emit("receive_message", { sender, message, room: room });

        console.log(`Pesan telah dikirim ke room ${room}`);
    });

    socket.on("leave_room", (room) => {
        socket.leave(room);
        console.log(`User ${socket.id} left room ${room}`);
    });
};

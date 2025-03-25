module.exports = (io, socket) => {
    socket.on("notification_send", ({type, room}) => {
        socket.emit("notification", { type, room });
        console.log(`Notification type: ${type} has been sent to room ${room}`);

        io.emit("notification_receive", { type, room });
        console.log(`Notification has been received. Room: ${room}`);
    });
};

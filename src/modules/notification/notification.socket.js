module.exports = (io, socket) => {
    socket.on("notification_send", ({type}) => {
        socket.emit("notification", { type });
        console.log(`Notification type: ${type}`);

        io.emit("notification_receive", { type });
        console.log(`Notification has been received.`);
    });
};

const chatSocket = require("../modules/chat/chat.socket");
const notificationSocket = require("../modules/notification/notification.socket");

module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);

        chatSocket(io, socket);
        notificationSocket(io, socket);

        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
};
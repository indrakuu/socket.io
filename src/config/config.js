const { Server } = require("socket.io");

const config = {
    PORT: 3000,
    socketConfig: {
        cors: {
            origin: "*",
        },
        pingInterval: 25000,
        pingTimeout: 60000,
    },
};

module.exports = (server) => {
    const io = new Server(server, config.socketConfig);
    return io;
};

module.exports.config = config;
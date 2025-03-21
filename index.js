const server = require("./src/server");
const { config } = require("./src/config/config");

server.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});

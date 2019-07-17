// create a server
const server = require("./api/server.js");

const port = process.env.port || 5001;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));

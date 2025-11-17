const http = require("http");
const PORT = 6500;

const server = http.createServer((req, res) => {
    res.write("hello");
    res.end(); // End the response
});

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

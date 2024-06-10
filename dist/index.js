"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDefinition_1 = __importDefault(require("./swaggerDefinition"));
const product_1 = __importDefault(require("./routes/product"));
const auth_1 = __importDefault(require("./routes/auth"));
const orders_1 = __importDefault(require("./routes/orders"));
const category_1 = __importDefault(require("./routes/category"));
const unauthRoutes_1 = __importDefault(require("./routes/unauthRoutes"));
const checkToken_1 = require("./middleware/checkToken");
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: "*",
        credentials: true
    }
});
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
const swaggerSpec = (0, swagger_jsdoc_1.default)({
    swaggerDefinition: swaggerDefinition_1.default,
    apis: ['./routes/*.ts'], // specify the path to your route files
});
app.get('/api/v1/users', (req, res) => {
    res.json({ message: 'List of users' });
});
app.use('/api/v1/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use((0, cookie_parser_1.default)());
// Pass socket.io instance to routes
app.use((req, res, next) => {
    req.io = io;
    next();
});
app.use("/api/v1", auth_1.default);
app.use("/api/v1", unauthRoutes_1.default);
app.use("/api/v1", product_1.default);
app.use("/api/v1", orders_1.default);
app.use("/api/v1", category_1.default);
app.get("/api/v1/ping", checkToken_1.Auth, (req, res) => {
    res.send(req.body.currentUser);
});
app.use("/", express_1.default.static(path_1.default.join(__dirname, "../../frontend/build")));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname + "../../../frontend/build/index.html"));
});
io.on("connection", (socket) => {
    console.log("New client connected with id: ", socket.id);
    socket.emit("topic 1", "some data");
    socket.on("disconnect", (message) => {
        console.log("Client disconnected with id: ", message);
    });
});
// setInterval(() => {
//   io.emit("Test topic", { event: "ADDED_ITEM", data: "some data" });
//   console.log("emitting data to all clients");
// }, 2000);
const PORT = 5001 || process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

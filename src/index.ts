import express, { Request, Response, NextFunction } from 'express';
import { createServer } from 'http';
import { Server as SocketIo } from 'socket.io';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import "dotenv/config";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDefinition from "./swaggerDefinition";


import AdminRouter from './routes/product';
import AuthRouter from './routes/auth';
import OrderRouter from './routes/orders';
import CategoryRouter from './routes/category';
import UnAuthRoutes from './routes/unauthRoutes';
import { Auth } from './middleware/checkToken';

declare module 'express-serve-static-core' {
  interface Request {
    io?: SocketIo;
  }
}

const app = express();
const server = createServer(app);
const io = new SocketIo(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: "*",
    credentials: true
  }
});

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);


const swaggerSpec = swaggerJSDoc({
  swaggerDefinition,
  apis: ['./routes/*.ts'], // specify the path to your route files
});

app.get('/api/v1/users', (req, res) => {
  res.json({ message: 'List of users' });
});
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cookieParser());

// Pass socket.io instance to routes
app.use((req: Request, res: Response, next) => {
  req.io = io;
  next();
});


app.use("/api/v1", AuthRouter);
app.use("/api/v1", UnAuthRoutes);
app.use("/api/v1", AdminRouter);
app.use("/api/v1", OrderRouter);
app.use("/api/v1", CategoryRouter);

app.get("/api/v1/ping", Auth, (req: Request, res: Response) => {
  res.send(req.body.currentUser);
});

app.use("/", express.static(path.join(__dirname, "../../frontend/build")));

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "../../../frontend/build/index.html"));
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

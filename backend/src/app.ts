import express, { Application } from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import taskRoutes from "./routes/taskRoutes";

const app: Application = express();

// Configure CORS
app.use(cors({
    origin: 'https://thankful-flower-049b26200.7.azurestaticapps.net',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true
}));

// Use either express.json() OR bodyParser.json(). 
// express.json() is built-in and preferred.
app.use(express.json());

// Remove the second 'const app = express();' and 'app.use(bodyParser.json());' 
// as they conflict with the code above.

app.use("/api", taskRoutes);

export default app;

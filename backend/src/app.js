import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';

import { connectDB } from './config/database.js';
import scheduleRoutes from './routes/scheduleRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const app = express();
connectDB();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(compression());


app.use('/api', scheduleRoutes);
app.use(errorHandler);

export default app;

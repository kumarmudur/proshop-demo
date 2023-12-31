import express from 'express';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB(); // connect to mongoDB

const port = process.env.PORT | 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('Api is running...');
});

app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
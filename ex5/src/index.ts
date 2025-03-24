import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use(apiRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
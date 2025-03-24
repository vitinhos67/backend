import { Router } from 'express';

const router = Router();

router.get('/api', (req, res) => {
    res.json({ message: 'Bem-vindo à API!' });
});

export default router;

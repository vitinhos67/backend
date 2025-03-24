import { Router } from 'express';
import { createUser, getUser, listUser, removeUser } from '../controllers/UserController';

const router = Router();

router.get('/api', (req, res) => {
    res.json({ message: 'Bem-vindo à API!' });
});

router.get('/api/user', listUser);
router.get('/api/user/:id', getUser);
router.delete('/api/user/:id', removeUser);
router.post('/api/user/', createUser);

export default router;

import express, { Router } from 'express';
import {
    getUsers,
    getUserById,
    createtUser,
    updateUser,
    deleteUser,
} from '../controllers/users';

const router: Router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createtUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
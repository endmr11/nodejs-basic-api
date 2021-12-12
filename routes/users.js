import express from 'express';
import { createUser,getUsers,getUser,updateUser, deleteUser } from '../controllers/users.js';


const router =express.Router();


//All routes in here are starting with /users
router.get('/', getUsers)

// /users/2 => req.params {id:2}
router.get('/:id', getUser)


router.post('/',createUser);

router.patch('/:id',updateUser);


router.delete('/:id',deleteUser);


export default router;
const express = require('express');
const router = express.Router();
const user = require('../controllers/UsersController.js');

router.get('/', user.getUsers);

router.get('/:id', user.getUserById);

router.post('/create', user.createUser);

router.put('/update', user.updateUser);

router.delete('/delete', user.deleteUser);

module.exports = router;
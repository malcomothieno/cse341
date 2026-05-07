const express = require('express');
const router = express.Router();
const { getAll, getOne, create, update, remove } = require('../controllers/contactsController');

// GET /contacts — retrieve all contacts
router.get('/', getAll);

// GET /contacts/:id — retrieve a single contact by ID
router.get('/:id', getOne);

// POST /contacts — create a new contact
router.post('/', create);

// PUT /contacts/:id — update an existing contact
router.put('/:id', update);

// DELETE /contacts/:id — delete a contact
router.delete('/:id', remove);

module.exports = router;

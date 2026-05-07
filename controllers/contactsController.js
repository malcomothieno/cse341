const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require('../models/contactsModel');

// GET /contacts — return all contacts
async function getAll(req, res) {
  try {
    const contacts = await getAllContacts();
    res.status(200).json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
}

// GET /contacts/:id — return single contact by ID
async function getOne(req, res) {
  try {
    const { id } = req.params;
    const contact = await getContactById(id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Invalid ID format or contact not found' });
  }
}

// POST /contacts — create a new contact
async function create(req, res) {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({ error: 'All fields are required: firstName, lastName, email, favoriteColor, birthday' });
    }
    const result = await createContact({ firstName, lastName, email, favoriteColor, birthday });
    res.status(201).json({ message: 'Contact created', id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create contact' });
  }
}

// PUT /contacts/:id — update a contact
async function update(req, res) {
  try {
    const { id } = req.params;
    const updatedFields = req.body;
    const result = await updateContact(id, updatedFields);
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update contact' });
  }
}

// DELETE /contacts/:id — delete a contact
async function remove(req, res) {
  try {
    const { id } = req.params;
    const result = await deleteContact(id);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to delete contact' });
  }
}

module.exports = { getAll, getOne, create, update, remove };

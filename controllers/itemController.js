
const Item = require('../models/itemModel');

// Get all items
const getAllItems = (req, res) => {
  Item.getItems((err, items) => {
    if (err) {
      return res.status(500).send('Error retrieving items');
    }
    res.render('index', { items });
  });
};

// Add a new item
const addItem = (req, res) => {
  const { name, description } = req.body;
  Item.addItem(name, description, (err, id) => {
    if (err) {
      return res.status(500).send('Error adding item');
    }
    res.redirect('/');
  });
};

// Edit an item
const editItem = (req, res) => {
  const { id, name, description } = req.body;
  Item.updateItem(id, name, description, (err) => {
    if (err) {
      return res.status(500).send('Error updating item');
    }
    res.redirect('/');
  });
};

// Delete an item
const deleteItem = (req, res) => {
  const { id } = req.params;
  Item.deleteItem(id, (err) => {
    if (err) {
      return res.status(500).send('Error deleting item');
    }
    res.redirect('/');
  });
};

module.exports = { getAllItems, addItem, editItem, deleteItem };

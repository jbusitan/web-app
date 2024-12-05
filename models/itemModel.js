
const sqlite3 = require('sqlite3').verbose();

// Function to open the database
function openDB() {
  return new sqlite3.Database('./database.db');
}

// Get all items
const getItems = (callback) => {
  const db = openDB();
  db.all('SELECT * FROM items', [], (err, rows) => {
    if (err) {
      console.error('Error retrieving items:', err);
      return callback(err);
    }
    callback(null, rows);
  });
  db.close();
};

// Add a new item
const addItem = (name, description, callback) => {
  const db = openDB();
  const stmt = db.prepare('INSERT INTO items (name, description) VALUES (?, ?)');
  stmt.run([name, description], function (err) {
    if (err) {
      console.error('Error adding item:', err);
      return callback(err);
    }
    callback(null, this.lastID); // Returning the id of the inserted item
  });
  db.close();
};

const updateItem = (id, name, description, callback) => {
  const db = openDB();
  const stmt = db.prepare('UPDATE items SET name = ?, description = ? WHERE id = ?');
  stmt.run([name, description, id], function (err) {
    if (err) {
      console.error('Error updating item:', err);
      return callback(err);
    }
    callback(null);
  });
  db.close();
};

// Delete an item
const deleteItem = (id, callback) => {
  const db = openDB();
  const stmt = db.prepare('DELETE FROM items WHERE id = ?');
  stmt.run([id], function (err) {
    if (err) {
      console.error('Error deleting item:', err);
      return callback(err);
    }
    callback(null);
  });
  db.close();
};

module.exports = { getItems, addItem, updateItem, deleteItem };

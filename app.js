
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const itemRoutes = require('./routes/itemRoutes');

// Set up EJS for views
app.set('view engine', 'ejs');
app.set('views', './views');

// Use middleware for handling form data
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/', itemRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

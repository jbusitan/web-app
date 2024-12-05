# Web App with CRUD Operations

This is a simple web application built using Node.js, Express, and SQLite3. It allows you to perform CRUD operations on a list of items.

## How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/jbusitan/web-app.git

Web App with CRUD Operations
This is a simple web application built using Node.js, Express, and SQLite3. It allows users to perform Create, Read, Update, and Delete (CRUD) operations on a list of items. The app stores item information such as name, description, and the date_created in an SQLite database. The user can view, add, edit, and delete items through a user-friendly web interface.

The app is designed to be lightweight, easy to use, and serves as a basic introduction to building a full-stack application with a database.

To allow others to run your Node.js web application locally after cloning your GitHub repository, you need to provide clear instructions in your README.md file. Here is an example of how to explain the setup process to someone who wants to clone and run your application locally:

How to Run Locally
Follow these steps to run the application on your local machine:

1. Clone the Repository
First, clone the repository from GitHub to your local machine. Open a terminal (or command prompt) and run the following command:

bash
git clone https://github.com/jbusitan/web-app.git
2. Install Dependencies
Navigate to the project folder and install the necessary dependencies:

bash
cd web-app
npm install
This command will install all the packages listed in the package.json file, including Express and SQLite3, along with other dependencies required by the project.

3. Set Up the Database
Before running the app, you need to set up the SQLite database. This will create the required items table in your database:

bash
node setupDatabase.js
This will execute the setupDatabase.js script, which initializes your SQLite database and creates the necessary table (items).

4. Run the Application
Start the application by running the following command:

bash
npm start
This will start your Express server, which by default listens on port 3000. You can open your browser and go to:

arduino
http://localhost:3000
You should now be able to interact with the app locally. You can view, add, update, and delete items through the web interface.

5. Optional: Using a Different Port
If port 3000 is already in use, you can change the port by setting the PORT environment variable before running the app:

bash
PORT=5000 npm start
Then access the app in your browser at:

arduino
http://localhost:5000
Troubleshooting
Missing Dependencies: If you encounter issues with missing packages, try deleting the node_modules folder and running npm install again:

bash
rm -rf node_modules
npm install
Database Issues: If the database setup script (setupDatabase.js) doesn't run correctly, check if you have write permissions in the project directory. Also, make sure SQLite3 is installed properly.


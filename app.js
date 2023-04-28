const Express = require('express');
const app = Express();
const mongoose = require('mongoose');
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

const db = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/technogames');
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
}
db();

// use "npm run start" command to run your code
// Do not change .github/workflows/nodejs.yml file and test folder else your code will be disqualified
// Database is already connected to the app
// You can create user model and schema and use it in your code

// start writing your code here



app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
//create backend server with mysql connection
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config({ path: './.env' });

//connect to mysql
const con = mysql.createPool("mysql://admin:AyUsDUrveshPraN@database-1.cqmmqqerazz0.ap-south-1.rds.amazonaws.com/taskcollab");


console.log(process.env.DB_HOST)
console.log(process.env.DB_NAME)
console.log(process.env.DB_PASS)
console.log(process.env.DB_USER)


//Test Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Taskcollab!' });
});

//Auth Routes
app.use(router);

//run server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server started on port 8000');
});
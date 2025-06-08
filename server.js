require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Route for index page
app.get('/', (req, res) => {
    res.sendFile('index.html');
});
console.log(process.env.DB_PASSWORD);
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});


app.post('/booking', (req, res) => {
  const { name, phone, guests, date, time } = req.body;

  const query = `
    INSERT INTO reservations (name, phone, guests, reservation_date, reservation_time)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [name, phone, guests, date, time], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'This time slot is already booked.' });
      }
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(200).json({ message: 'Booking successful' });
  });
});


app.post('/contact', (req, res) => {
  console.log('Received contact request:', req.body);
  const { name, email, message } = req.body;

  const query = `
    INSERT INTO contact_messages (name, email, message)
    VALUES (?, ?, ?)
  `;

  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error', error: err });
      }
    res.status(200).json({ message: 'Message sent successfully' });
  });
});


app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});

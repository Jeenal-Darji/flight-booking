const mysql = require('mysql');
const express= require('express');  
const path = require('path');

const app=express();
const PORT=3000;

app.use(express.json());

// Serve static files from the assets directory
app.use('/assets', express.static(path.join(__dirname, '..', 'frontend', 'my-app', 'src', 'Components', 'assets')));

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'abc123',
  database: 'project'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});


// Endpoint to handle registration
app.post('/api/register', (req, res) => {
  const { firstName, lastName, email, phoneNumber, dob, password } = req.body;  
  // Execute SQL query to insert registration data into 'users' table
  connection.query(
    'INSERT INTO users (firstName, lastName, email, phoneNumber, dob , password) VALUES (?, ?, ?, ?, ?, ?)',
    [firstName, lastName, email, phoneNumber, dob, password],
    (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ message: 'Internal server error' });}
      console.log('Registration data inserted successfully');
      return res.status(200).json({ message: 'Registration successful' });}
  );
});

  
 // Endpoint to handle login
app.post('/api/login', (req, res) => {
  console.log('Received login request');
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });}
  connection.query( 'SELECT * FROM users WHERE email = ?' , [email], (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      return res.status(500).json({ error: 'Internal server error' });}
    if (results.length === 0) {
      console.log('Login fail');
      return res.status(401).json({ error: 'Invalid email or password' });}
    // Check if the password matches
    const user = results[0];
    if (user.password !== password) {
      console.log('Login fail');
      return res.status(401).json({ error: 'Invalid email or password' });}
    // If login successful
    console.log('Login successfully');
    res.status(200).json({ message: 'Login successful' });
  });
});


app.post('/api/flights', (req, res) => {
  const { origin, destination, tripType } = req.body;
  let query = `SELECT * FROM Flights WHERE source='${origin}' AND destination='${destination}'`;

  if (tripType === 'roundTrip') {
    query += ` UNION SELECT * FROM Flights WHERE source='${destination}' AND destination='${origin}'`;
  }

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// Serve the React application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'my-app', 'public','index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:',PORT);
});
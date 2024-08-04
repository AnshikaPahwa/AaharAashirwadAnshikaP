const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let ngos = [
    { name: "NGO 1", contact: "1234567890", email: "ngo1@example.com" },
    { name: "NGO 2", contact: "0987654321", email: "ngo2@example.com" },
];

app.get('/ngos', (req, res) => {
    res.json(ngos);
});

app.post('/donate', (req, res) => {
    const donation = req.body;
    
    res.json({ message: 'Donation received', donation });
});

app.post('/book', (req, res) => {
    const booking = req.body;
  
    res.json({ message: 'Booking received', booking });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



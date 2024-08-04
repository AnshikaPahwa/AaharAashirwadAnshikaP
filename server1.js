const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/submit1', (req, res) => {
    const donationData = req.body;
    
    console.log('Donation data received:', donationData);
    res.json({ message: 'Donation received successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

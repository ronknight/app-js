const express = require('express');
const app = express();
const PORT = 80;

let savedName = '';  // Variable to store the passed parameter
let savedCode = '';
let savedState = '';

// Endpoint to save code and state from the query parameters
app.get('/', (req, res) => {
    // Saving the query parameters "code" and "state"
    savedCode = req.query.code;
    savedState = req.query.state;

//    res.json({
//       message: `Code: ${savedCode}, State: ${savedState}`,
//    }
//	)
//	;
res.send('<!DOCTYPE html><html><head><title>Blank Page</title></head><body></body></html>');

});
// An additional endpoint to retrieve the saved name
app.get('/get-saved-name', (req, res) => {
    if (savedCode) {
        res.json({
            message: `Code: ${savedCode}, State: ${savedState}`,
        });
    } else {
        res.status(404).send('No name has been saved yet.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const customers = [
        {id:1, name:'Max'},
        {id:2, name:'Neow'}
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
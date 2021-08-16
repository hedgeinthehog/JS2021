const express = require('express');
const cors = require('cors');

const apiRouter = require('./src/routes/API');

const app = express();
app.use(express.json());

app.use(cors({ origin: '*' }));
app.use(cors({ origin: 'http://localhost:8080' }));

app.use('/api', apiRouter);

app.use('/', function(req, res) {
    res.send('server used for API only');
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
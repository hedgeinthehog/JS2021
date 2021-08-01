require('process');
const express = require('express');
const path = require('path');
const connection = require('./db');
const studentsRouter = require('./app/routes/api/students');

const PORT = process.env.PORT || 3000;

const app = express();

// set templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

// --> exposes "assets" publicly 
app.use(express.static(path.join(__dirname, 'assets')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('pages/index', {content: 'Welcome'});
});
app.use('/students', studentsRouter);

app.use((_, res) => {
  res.status(404).render('pages/error');
})

app.use((err, _, res, __) => {
  console.log(err.message);
  err.status ? res.status(err.status).render('pages/error') : res.status(500).render('pages/fail');
})

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});

process.on('SIGINT', () => {
  connection.end(() => {
    console.log('App terminated and DB is disconnected');
    process.exit();
  });
});

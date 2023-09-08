const express = require('express');
const app = express();
const cors = require('cors');

console.clear();

const corsOptions = {
  origin: 'https://vidcrawler.netlify.app/',
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

// Controllers
const downloadRouter = require('./controllers/download');
const informationRouter = require('./controllers/information');

// Middleware
const handleErrors = require('./middleware/handleErrors');

app.get('/', (req, res) => {
  res.send('Hello World! :)');
});

app.use('/', downloadRouter);
app.use('/info', informationRouter);

app.use(handleErrors);
const PORT = process.env.PORT || 3000;

const listener = app.listen(PORT, () => {
  console.log(`Server open on PORT: ${listener.address().port} ╰(*°▽°*)╯`);
});

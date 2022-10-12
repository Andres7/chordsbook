const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const { config } = require('./helpers/config');
const Port = config.PORT;

app.use(cors({ origin: '*' }));

global.appRoot = path.resolve(__dirname);

app.use(express.urlencoded({ extended: true, limit: '550mb', parameterLimit: 55000000 }));
app.use(express.json({ limit: '550mb' }));

//RUTAS
// const { authToken } = require('./middlewares/auth');
// app.use([authToken]);
app.use('/api', require('./routes/api.routes'));

const http = require('http').createServer(app);

http.listen(Port, () => {
    console.log(`API CHORDSBOOK: ${Port}`);
});
http.setTimeout(60000000);
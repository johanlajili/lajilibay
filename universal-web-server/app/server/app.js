import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import cors from 'cors';

import router from './router';

const app = express();
const client = express.static(path.join(__dirname, '../client'));
const shared = express.static(path.join(__dirname, '../shared'));
app.use(favicon(path.join(__dirname + '../../../public/favicon.ico')));
app.use(cors());
app.use(client);
app.use(shared);

app.get('*', router);

export default app;

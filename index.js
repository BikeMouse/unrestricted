import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import path from 'node:path'

const app = express();
const server = createServer(app);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use('/assets', express.static(path.resolve(__dirname, './dist/assets/')));
console.log(path.resolve(__dirname, './src/main.jsx'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
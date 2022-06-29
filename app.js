const express = require('express')
const app = express()
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({server});
let lastMessage = null;

wss.on('connection', function connection(ws) {
    if (lastMessage) {
        ws.send(lastMessage);
    }
    ws.on('message', function incoming(message) {
        message = message.toString();
        lastMessage = message;
        console.log('received: %s', message);
        console.log('number of clients', wss.clients.size);

        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });

    });
});

app.get('/', (req, res) => res.send('Hello World!'))

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Lisening on port :${port}`))
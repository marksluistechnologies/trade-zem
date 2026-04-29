const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { Server } = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // HTTP Server banaya Next.js handle karne ke liye
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // Socket.io Server attach kiya live charts ke liye
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  // Jab bhi koi user website kholega, yeh trigger hoga
  io.on('connection', (socket) => {
    console.log('🟢 New Trader Connected:', socket.id);

    // Yahan hum aage chalkar apne 10 Charts ka live data bhejenge
    
    socket.on('disconnect', () => {
      console.log('🔴 Trader Disconnected:', socket.id);
    });
  });

  // Server start karna
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`🚀 Trade Zem Live Engine running on http://localhost:${PORT}`);
  });
});
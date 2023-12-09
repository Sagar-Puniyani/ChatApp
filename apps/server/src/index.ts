import http from 'http';
import SocketService from './services/socket';

async function init(){
    const socket = new SocketService();
    const httpServer = http.createServer();
    const PORT = process.env.PORT ||8000;

    httpServer.on('error', (err) => {
        console.error('HTTP server error:', err);
    });

    socket.io.attach(httpServer);

    httpServer.listen(PORT , ()=>{
        console.log(`HTTP server Strated at Port : ${PORT}`);
        
    })
}

init();
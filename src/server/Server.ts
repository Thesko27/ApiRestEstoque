import express from 'express';


const server = express();
server.use(express.json());

server.get('/', (_,res)=>{
    return res.send('Welcome to the Home Page!');
})

export {server}
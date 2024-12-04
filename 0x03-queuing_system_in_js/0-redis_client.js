import { createClient } from "redis";

// crate the redis client 
const client = createClient();

// create event listener for successful connection

client.on('connect', () => {
    console.log('Redis client connected to the server');
});

// Event lirstner for errors
client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err.message}`);
});
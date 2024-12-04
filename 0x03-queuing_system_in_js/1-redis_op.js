import { createClient, print } from "redis";

// create a redis client
const client = createClient();
client.on('connect', () => {
    console.log("Redis client connected to the server");
});


client.on('error', (err) => {
    console.log(`Redis client is not connected to the server: ${err.message}`);
});

// function to set new key-value pair
function setNewSchool(schoolName, value) {
    client.set(schoolName, value, print);
}

function displaSchoolValue(schoolNaem) {}
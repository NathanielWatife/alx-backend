import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('error', (err) => {
    console.log('Redis client not connected to the server:', err.message);
});

function setNewHash(callback) {
    const fields = [
        ['Portland', 50],
        ['Seattle', 80],
        ['New York', 20],
        ['Bogota', 20],
        ['Cali', 40],
        ['Paris', 2],
    ];

    let completed = 0;

    fields.forEach(([field, value]) => {
        client.hset('HolbertonSchools', field, value, redis.print);
        completed += 1;

        // Once all fields are set, execute the callback
        if (completed === fields.length && callback) {
            callback();
        }
    });
}

function displayHash() {
    client.hgetall('HolbertonSchools', (err, obj) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(obj);
    });
}

// Call the functions in sequence
setNewHash(displayHash);

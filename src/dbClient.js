const redis = require("redis");
const configure = require('./configure');

const config = configure();

console.log(config);

const client = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    retry_strategy: () => {
        return new Error("Retry time exhausteeed");
    }
});

process.on('SIGINT', function () {
    client.quit();
});

module.exports = client;

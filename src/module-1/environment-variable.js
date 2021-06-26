// TODO: fetch all environment variable from '.env' file and display in console

const dotEnv = require('dotenv');

// Implememnt your logic below

console.table(
    {
        PORT: port,
        NODE_ENVIRONMENT: node_env,
        API_KEY: key,
        DOMAIN: domain,
        CHALLENEGE: challenge
    }
);
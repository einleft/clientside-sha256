const crypto = require('crypto');
const readline = require('readline')

// creates a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// account object
const account = {
    username: 'user',
    password: 'root'
};

const usernameHash = crypto.createHash('sha256'),
    passwordHash = crypto.createHash('sha256');

usernameHash.update(account.username);
passwordHash.update(account.password);

// outputs the hashed password in a hexadecimal format
const usernameHashToHex = usernameHash.digest('hex'),
    passwordHashToHex = passwordHash.digest('hex');

console.log(`username hash: ${usernameHashToHex}`);
console.log(`password hash: ${passwordHashToHex}`);

// USERNAME INPUT

rl.question('Username: ', (unhashedUsername) => {

    // creates the hashed username from input
    const hash = crypto.createHash('sha256');
    hash.update(unhashedUsername);
    const hashedUsername = hash.digest('hex');

    // checks if the hash is matching with the login
    if (hashedUsername === usernameHashToHex) {
        console.log('username hash matched!');
    } else {
        console.log("username hash doesn't match");
    }

    // PASSWORD INPUT

    rl.question('Password: ', (unhashedPassword) => {

        const hash = crypto.createHash('sha256');
        hash.update(unhashedPassword);
        const hashedPassword = hash.digest('hex');

        if (hashedPassword === passwordHashToHex) {
            console.log('password hash matched!');
        } else {
            console.log("password hash doesn't match");
        }

    })
})
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//crypto-js
var message = 'a';

var hash = SHA256(message).toString();
console.log(hash);
console.log(message);

var data = {
    id: 4
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if(resultHash === token.hash){
    console.log('data was not changed')
} else {
    console.log('data changed...do not trust')
}


//jwt
data.id = 10;
var encodedToken = jwt.sign(data, '123abc');
console.log(encodedToken);

var decoded = jwt.verify(encodedToken, '123abc');
console.log(decoded);

//bcryptjs
var password = '123abc!';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});


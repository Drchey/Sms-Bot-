var accountSid = 'AC0c6e361d9d8d09b7da30c6a5e1ac34fd';
var authToken = 'ab7cea54706b067ba81173bfeb3579ad';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({body: 'Hi Earthling, this is the "Richey" Bot', from: '+9039039237', to: '+8025970609'})
      .then(message => console.log(message.sid));
// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sagarkart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We are connected bro/sis..")
});

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    const greeting = "Meow name is " + this.name
    console.log(greeting);
  }
  

const Kitten = mongoose.model('harryKitty', kittySchema);

const sagarKitty = new Kitten({ name: 'sagarKitty' });
// console.log(sagarKitty.name); // 'Silence'
// sagarKitty.speak();

sagarKitty.save(function (err, sagarKitty) {
    if (err) return console.error(err);
    sagarKitty.speak();
  });
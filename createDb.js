var mongoose = require('mongoose');
mongoose.connect('mongodb://92.168.1.38:27017/test');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({
    name: 'Zildjian'
});
console.log(kitty);

kitty.save(function(err, kitty, affected) {
    console.log(arguments);
});


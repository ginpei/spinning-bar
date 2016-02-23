var SpinningBar = require('../index.js');

var obj = SpinningBar.start();
setTimeout(function() {
	obj.stop();
}.bind(this), 3000);

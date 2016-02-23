function SpinningBar(options) {
	return this.constructor(options);
}

SpinningBar.prototype.LETTERS = '-\\|/';

SpinningBar.prototype.constructor = function(options) {
	this._tm = null;
	this._index = 0;
};

SpinningBar.prototype.start = function() {
	this._spin();
};

SpinningBar.prototype.stop = function() {
	this._output(' ');
	clearTimeout(this._tm);
};

SpinningBar.prototype._spin = function() {
	var letter = this.LETTERS[this._index++ % this.LETTERS.length];
	this._output(letter);

	var duration = 100;
	this._tm = setTimeout(function() {
		this._spin();
	}.bind(this), duration);
};

SpinningBar.prototype._output = function(letter) {
	process.stdout.write(letter);
	process.stdout.write('\b');
};

SpinningBar.start = function() {
	var obj = new SpinningBar();
	obj.start();
	return obj;
};

module.exports = SpinningBar;

var classes = require('classes');

module.exports = Carousel;

function Carousel(els,length){
  if (!(this instanceof Carousel)) return new Carousel(els);
  this.els = (typeof els == 'string' ? document.querySelectorAll(els) : els);
  this.length(length || this.els.length);
  this.width(1);
  this.transition('transition');
  this._init();
  return this;
}

Carousel.prototype.next = function(){
  this.last = this.current;
  if (~this.current){
    this.current = (this.current + this._width) % this._length;
  } else {
    this.current = 0;
  }
  this._refresh();
  return this;
}

Carousel.prototype.prev = function(){
  this.last = this.current;
  if (~this.current){
    var d = this.current - this._width
    this.current = (d < 0 ? this._length + d : d) % this._length;
  } else {
    this.current = 0;
  }
  this._refresh();
  return this;
}

Carousel.prototype.length = function(n){
  this._length = n;
  return this;
}
Carousel.prototype.width = function(n){
  this._width = n;
  return this;
}

Carousel.prototype.start = function(){
  this.stop();
  if (this.cycle) this.cycle();
  return this;
}

Carousel.prototype.stop = function(){
  if (this.nextTimeout){
    clearTimeout(this.nextTimeout);
    delete this.nextTimeout;
  }
  return this;
}

Carousel.prototype.autoplay = function(msecs){
  this.duration = msecs;
  if (msecs) {
    var self = this;
    this.cycle = function(){
      self.next();
      if (self.cycle) {
        self.nextTimeout = setTimeout( self.cycle, self.duration, self, self.duration );
      }
    }
  }
  return this;
}

Carousel.prototype.transition = function(trans){
  this._transition = trans;
  return this;
}

Carousel.prototype.currentSlice = function(){
  return this._sliceFrom(this.current);
}

Carousel.prototype.lastSlice = function(){
  return this._sliceFrom(this.last);
}

Carousel.prototype._sliceFrom = function(start){
  var ret = [];
  if (~start) {
    for (var i=0;i<this._width;++i){
      ret.push(this.els[(start + i) % this._length]);
    }
  }
  return ret;
}

Carousel.prototype._refresh = function(){
  if (~this.last)    {
    var slice = this.lastSlice();
    for (var i=0;i<slice.length;++i){
      hide(slice[i], this._transition);
    }
  }
  if (~this.current) {
    var slice = this.currentSlice();
    for (var i=0;i<slice.length;++i){
      show(slice[i], this._transition);
    }
  }
}

Carousel.prototype._init = function(){
  this.last = this.current = -1;
  for (var i=0;i<this.els.length;++i){
    hide(this.els[i], this._transition);
  }
}

function show(el,trans){
  trans = trans.split(' ');
  var css = classes(el);
  for (var i=0;i<trans.length;++i) css.add(trans[i]);
  css.remove('hide');
}

function hide(el,trans){
  trans = trans.split(' ');
  var css = classes(el);
  for (var i=0;i<trans.length;++i) css.remove(trans[i]);
  css.add('hide');
}

var classes = require('classes');

module.exports = Carousel;

function Carousel(els,length){
  if (!(this instanceof Carousel)) return new Carousel(els);
  this.els = (typeof els == 'string' ? document.querySelectorAll(els) : els);
  this.length = length || this.els.length;
  return this;
}

Carousel.prototype.start = function(){
  this.last = this.current = -1;
  this._init();
  return this;
}

Carousel.prototype.next = function(){
  this.last = this.current;
  this.current = (this.current + 1) % this.length;
  this._refresh();
  return this;
}

Carousel.prototype.prev = function(){
  this.last = this.current;
  this.current = (this.current - 1) % this.length;
  this._refresh();
  return this;
}

Carousel.prototype._refresh = function(){
  if (~this.current) show(this.els[this.current]);
  if (~this.last)    hide(this.els[this.last]);
}

Carousel.prototype._init = function(){
  for (var i=0;i<this.els.length;++i){
    hide(this.els[i]);
  }
}

/* note delay to get item.hide -> item -> item.transition to work */
function show(el){
  classes(el).remove('hide')
  setTimeout( function(self){ self.add('transition') }, 20, classes(el) );
}

function hide(el){
  classes(el).add('hide').remove('transition');
}

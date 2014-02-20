*This repository is a mirror of the [component](http://component.io) module [ericgj/carousel](http://github.com/ericgj/carousel). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ericgj-carousel`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# carousel

  Another simple carousel/slideshow component

  Note no swipe support is included (or planned). If you need a swipeable 
  carousel, use [component/swipe][swipe].

## Installation

    $ component install ericgj/carousel

## Example

```javascript
  
  var carousel = require('carousel')('#root > .item')
  carousel.autoplay(6000);
  carousel.width(4);
  carousel.transition('animated bounce-in-left');
  window.onload = function(){
    carousel.start();
  }

```

## API

### Carousel( els:NodeList|String, length )

  Construct a carousel of given elements, or using given selector query.
  Optionally specify a maximum length of elements, otherwise it will cycle
  through all given/selected elements.

### Carousel#length( n )

  Limit of total elements in carousel. Defaults to all given/selected elements.

### Carousel#width( n )

  Set width of carousel 'window' (i.e., how many elements shown each cycle). 
  Defaults to 1.

### Carousel#next

  Display next 'window' of elements

### Carousel#prev

  Display previous 'window' of elements

### Carousel#autoplay( msecs )

  Define the duration each element 'window' is displayed before advancing to 
  next, in milliseconds.

### Carousel#start

  Start autoplay

### Carousel#stop

  Stop autoplay

### Carousel#transition( css:String )

  CSS class(es) to be added to elements as they are shown. Defaults to 
  'transition'.
  
## Notes

- This carousel does not currently rearrange elements but only shows/hides
  them. Because of this, if your cycle width is not a factor of the total
  length of elements, you may see elements 'out of order' when they cycle
  around to the beginning.

- You should add `.hide { display: none; }` for hiding inactive elements.

- For [animate.css][animate] style transitions, check [test\index.html][test] 
  for an example. Note 'exit' transitions aren't currently supported by this
  carousel.

## License

  MIT

[swipe]: https://github.com/component/swipe
[test]:  https://github.com/ericgj/carousel/blob/master/test/index.html
[animate]: http://daneden.me/animate/


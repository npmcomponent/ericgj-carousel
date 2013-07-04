
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
  window.onload = function(){
    carousel.start();
  }

```

## API

### Carousel( els:NodeList|String, length )

Construct a carousel of given elements, or using given selector query.
Optionally specify a maximum length of elements, otherwise it will cycle
through all given/selected elements.

### Carousel#next

Display next element

### Carousel#prev

Display previous element

### Carousel#autoplay( msecs )

Define the duration each element is displayed before advancing to next, in 
milliseconds.

### Carousel#start

Start autoplay

### Carousel#stop

Stop autoplay


## Notes

- At the moment, it's more slideshow (1 at a time) than carousel.

- You should add `.hide { display: none; }` for hiding inactive elements.

- For transitions, add `.transition { ... }`. Check [test\index.html][test]
for an example.

## License

  MIT

[swipe]: https://github.com/component/swipe
[test]:  https://github.com/ericgj/carousel/blob/master/test/index.html



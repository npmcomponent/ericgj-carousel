
# carousel

  Another simple carousel

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

- You should add `.hide { display: none; }` for hiding inactive elements.

- For transitions, add `.transition { ... }`. Check [test][test\index.html]
for an example.

## License

  MIT

[test]: https://github.com/ericgj/carousel/blob/master/test/index.html

